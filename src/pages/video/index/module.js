import {
  fetchContent
} from './service';

import {
  makeHtmlContent
} from "../../../utils";
const state = {
  res: {},
  content: {},
  exist: true,
}

const actions = {
  // 获取文章内容
  async fetch_content({
    commit,
    state,
    rootState
  }, {
    id
  }) {
    try {
      // 获取贴子详情
      let { data } = await fetchContent({
        subjectid: id
      })
      if (data.code != 0) {
        // 贴子被删除状态
        commit("GET_EXIST_STATUS", false);
      } else {
        if (!window.ENV.app) {
          if (
            data.result.int_verify === 0 ||
            ((data.result.int_verify === -1 &&
                data.result.int_category != 4 &&
                data.result.int_category != 6) ||
              data.result.bool_delete)
          ) {
            commit("GET_EXIST_STATUS", false);
            return;
          }
        }
        // 验证content
        if (data.result.content) {
          var content = JSON.parse(data.result.content);
          rootState.CONTENT_IMGS == [];
          rootState.IMG_INDEX = 0;
          // 解析长图文video
          // if (data.result.int_type === 1) {
          //   let _html = makeHtmlContent(
          //     content.video
          //   );
          //   if (_html) {
          //     content.video = _html;
          //   }
          // }
          // 返回在渲染页面之前得结果
          console.log('content:', content)
          commit("SET_CONTENT", content);
          rootState.content = content;
        }
        commit("SET_RES", data.result);
        rootState.res = data.result;
      }
    } catch (err) {
      console.log('content.catch')
      commit("GET_EXIST_STATUS", false);
      return;
    }
  }
}

const mutations = {
  // 设置特殊状态
  GET_USER_AGENT(state, para) {
    // 通过中间件。判断在路由之前执行 判断路由类型
    let nvg = para.nvg.toLowerCase(),
      refer = para.ref,
      r = nvg.indexOf('closer-ios') > -1 || nvg.indexOf('closer-android') > -1,
      _result = r || refer.indexOf('/invite') > -1;
    state.GET_MESSAGE_STATE = !_result;
    state.GET_IS_APP = r
    state.agent = nvg;
    state.isPre = refer.indexOf('?view=pre') > -1;
  },
  // 设置贴子详情内容
  SET_CONTENT(state, para) {
    state.content = para
  },
  // 设置贴子返回详情
  SET_RES(state, para) {
    state.res = para
  },
  // 设置贴子是否被删除
  GET_EXIST_STATUS(state, para) {
    state.exist = para
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}