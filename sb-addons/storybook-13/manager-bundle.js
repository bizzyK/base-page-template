try{
(()=>{var M=__STORYBOOK_TYPES__,{Addon_TypesEnum:E}=__STORYBOOK_TYPES__;var $=__STORYBOOK_API__,{ActiveTabs:j,Consumer:V,ManagerContext:X,Provider:Q,RequestResponseError:z,addons:s,combineParameters:q,controlOrMetaKey:J,controlOrMetaSymbol:Z,eventMatchesShortcut:ee,eventToShortcut:te,experimental_requestResponse:re,isMacLike:oe,isShortcutTaken:ne,keyToSymbol:se,merge:ae,mockChannel:h,optionOrAltSymbol:ue,shortcutMatchesShortcut:ie,shortcutToHumanString:le,types:Ee,useAddonState:he,useArgTypes:ce,useArgs:_e,useChannel:Se,useGlobalTypes:Oe,useGlobals:de,useParameter:Re,useSharedState:Te,useStoryPrepared:fe,useStorybookApi:pe,useStorybookState:Ce}=__STORYBOOK_API__;var ge=__STORYBOOK_CHANNELS__,{Channel:u,PostMessageTransport:He,WebsocketTransport:Le,createBrowserChannel:be}=__STORYBOOK_CHANNELS__;var n=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof window<"u"?e=window:typeof self<"u"?e=self:e={},e})();var We=__STORYBOOK_CLIENT_LOGGER__,{deprecate:Ke,logger:c,once:Fe,pretty:$e}=__STORYBOOK_CLIENT_LOGGER__;var ze=__STORYBOOK_CORE_EVENTS__,{ARGTYPES_INFO_REQUEST:qe,ARGTYPES_INFO_RESPONSE:Je,CHANNEL_CREATED:Ze,CHANNEL_WS_DISCONNECT:et,CONFIG_ERROR:tt,CREATE_NEW_STORYFILE_REQUEST:rt,CREATE_NEW_STORYFILE_RESPONSE:ot,CURRENT_STORY_WAS_SET:nt,DOCS_PREPARED:st,DOCS_RENDERED:at,FILE_COMPONENT_SEARCH_REQUEST:ut,FILE_COMPONENT_SEARCH_RESPONSE:it,FORCE_REMOUNT:lt,FORCE_RE_RENDER:_,GLOBALS_UPDATED:Et,NAVIGATE_URL:ht,PLAY_FUNCTION_THREW_EXCEPTION:ct,PRELOAD_ENTRIES:_t,PREVIEW_BUILDER_PROGRESS:St,PREVIEW_KEYDOWN:Ot,REGISTER_SUBSCRIPTION:dt,REQUEST_WHATS_NEW_DATA:Rt,RESET_STORY_ARGS:S,RESULT_WHATS_NEW_DATA:Tt,SAVE_STORY_REQUEST:ft,SAVE_STORY_RESPONSE:pt,SELECT_STORY:Ct,SET_CONFIG:Nt,SET_CURRENT_STORY:At,SET_GLOBALS:mt,SET_INDEX:kt,SET_STORIES:Pt,SET_WHATS_NEW_CACHE:vt,SHARED_STATE_CHANGED:Dt,SHARED_STATE_SET:yt,STORIES_COLLAPSE_ALL:gt,STORIES_EXPAND_ALL:Ht,STORY_ARGS_UPDATED:Lt,STORY_CHANGED:bt,STORY_ERRORED:xt,STORY_INDEX_INVALIDATED:It,STORY_MISSING:wt,STORY_PREPARED:Yt,STORY_RENDERED:O,STORY_RENDER_PHASE_CHANGED:Ut,STORY_SPECIFIED:Gt,STORY_THREW_EXCEPTION:Mt,STORY_UNCHANGED:Bt,TELEMETRY_ERROR:Wt,TOGGLE_WHATS_NEW_NOTIFICATIONS:Kt,UNHANDLED_ERRORS_WHILE_PLAYING:Ft,UPDATE_GLOBALS:d,UPDATE_QUERY_PARAMS:$t,UPDATE_STORY_ARGS:R}=__STORYBOOK_CORE_EVENTS__;function i(){let e={setHandler:()=>{},send:()=>{}};return new u({transport:e})}var l=class{constructor(){this.getChannel=()=>{if(!this.channel){let e=i();return this.setChannel(e),e}return this.channel},this.getServerChannel=()=>{if(!this.serverChannel)throw new Error("Accessing non-existent serverChannel");return this.serverChannel},this.ready=()=>this.promise,this.hasChannel=()=>!!this.channel,this.hasServerChannel=()=>!!this.serverChannel,this.setChannel=e=>{this.channel=e,this.resolve()},this.setServerChannel=e=>{this.serverChannel=e},this.promise=new Promise(e=>{this.resolve=()=>e(this.getChannel())})}},a="__STORYBOOK_ADDONS_PREVIEW";function T(){return n[a]||(n[a]=new l),n[a]}var f=T();s.setConfig({panelPosition:"bottom",isFullscreen:!0,enableShortcuts:!0,showNav:!0,showPanel:!0});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
