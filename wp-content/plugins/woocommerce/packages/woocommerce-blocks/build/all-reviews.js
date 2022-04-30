this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["all-reviews"]=function(e){function t(t){for(var o,a,s=t[0],i=t[1],l=t[2],u=0,b=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&b.push(n[a][0]),n[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(d&&d(t);b.length;)b.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],o=!0,s=1;s<r.length;s++){var i=r[s];0!==n[i]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var o={},n={7:0},c=[];function a(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=o,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=i;return c.push([357,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},104:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return u}));var o=r(0),n=r(1),c=r(3),a=r(6),s=r(2),i=r(58);const l=(e,t,r)=>Object(o.createElement)(a.BlockControls,null,Object(o.createElement)(c.ToolbarGroup,{controls:[{icon:"edit",title:r,onClick:()=>t({editMode:!e}),isActive:e}]})),d=(e,t)=>{const r=Object(s.getSetting)("showAvatars",!0),a=Object(s.getSetting)("reviewRatingsEnabled",!0);return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(c.ToggleControl,{label:Object(n.__)("Product rating",'woocommerce'),checked:e.showReviewRating,onChange:()=>t({showReviewRating:!e.showReviewRating})}),e.showReviewRating&&!a&&Object(o.createElement)(c.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},Object(o.createInterpolateElement)(Object(n.__)("Product rating is disabled in your <a>store settings</a>.",'woocommerce'),{a:Object(o.createElement)("a",{href:Object(s.getAdminLink)("admin.php?page=wc-settings&tab=products"),target:"_blank",rel:"noopener noreferrer"})})),Object(o.createElement)(c.ToggleControl,{label:Object(n.__)("Reviewer name",'woocommerce'),checked:e.showReviewerName,onChange:()=>t({showReviewerName:!e.showReviewerName})}),Object(o.createElement)(c.ToggleControl,{label:Object(n.__)("Image",'woocommerce'),checked:e.showReviewImage,onChange:()=>t({showReviewImage:!e.showReviewImage})}),Object(o.createElement)(c.ToggleControl,{label:Object(n.__)("Review date",'woocommerce'),checked:e.showReviewDate,onChange:()=>t({showReviewDate:!e.showReviewDate})}),Object(o.createElement)(c.ToggleControl,{label:Object(n.__)("Review content",'woocommerce'),checked:e.showReviewContent,onChange:()=>t({showReviewContent:!e.showReviewContent})}),e.showReviewImage&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.a,{label:Object(n.__)("Review image",'woocommerce'),value:e.imageType,options:[{label:Object(n.__)("Reviewer photo",'woocommerce'),value:"reviewer"},{label:Object(n.__)("Product",'woocommerce'),value:"product"}],onChange:e=>t({imageType:e})}),"reviewer"===e.imageType&&!r&&Object(o.createElement)(c.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},Object(o.createInterpolateElement)(Object(n.__)("Reviewer photo is disabled in your <a>site settings</a>.",'woocommerce'),{a:Object(o.createElement)("a",{href:Object(s.getAdminLink)("options-discussion.php"),target:"_blank",rel:"noopener noreferrer"})}))))},u=(e,t)=>Object(o.createElement)(o.Fragment,null,Object(o.createElement)(c.ToggleControl,{label:Object(n.__)("Order by",'woocommerce'),checked:e.showOrderby,onChange:()=>t({showOrderby:!e.showOrderby})}),Object(o.createElement)(c.SelectControl,{label:Object(n.__)("Order Product Reviews by",'woocommerce'),value:e.orderby,options:[{label:"Most recent",value:"most-recent"},{label:"Highest Rating",value:"highest-rating"},{label:"Lowest Rating",value:"lowest-rating"}],onChange:e=>t({orderby:e})}),Object(o.createElement)(c.RangeControl,{label:Object(n.__)("Starting Number of Reviews",'woocommerce'),value:e.reviewsOnPageLoad,onChange:e=>t({reviewsOnPageLoad:e}),max:20,min:1}),Object(o.createElement)(c.ToggleControl,{label:Object(n.__)("Load more",'woocommerce'),checked:e.showLoadMore,onChange:()=>t({showLoadMore:!e.showLoadMore})}),e.showLoadMore&&Object(o.createElement)(c.RangeControl,{label:Object(n.__)("Load More Reviews",'woocommerce'),value:e.reviewsOnLoadMore,onChange:e=>t({reviewsOnLoadMore:e}),max:20,min:1}))},11:function(e,t){e.exports=window.wp.primitives},113:function(e,t){},119:function(e,t,r){"use strict";var o=r(0),n=r(4),c=r.n(n),a=r(29),s=r(9);r(153),t.a=Object(s.withInstanceId)(e=>{let{className:t,instanceId:r,label:n="",onChange:s,options:i,screenReaderLabel:l,value:d}=e;const u="wc-block-components-sort-select__select-"+r;return Object(o.createElement)("div",{className:c()("wc-block-sort-select","wc-block-components-sort-select",t)},Object(o.createElement)(a.a,{label:n,screenReaderLabel:l,wrapperElement:"label",wrapperProps:{className:"wc-block-sort-select__label wc-block-components-sort-select__label",htmlFor:u}}),Object(o.createElement)("select",{id:u,className:"wc-block-sort-select__select wc-block-components-sort-select__select",onChange:s,value:d},i&&i.map(e=>Object(o.createElement)("option",{key:e.key,value:e.key},e.label))))})},12:function(e,t){e.exports=window.wp.apiFetch},122:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r(1),n=r(22);const c={attributes:{editMode:!1,imageType:"reviewer",orderby:"most-recent",reviewsOnLoadMore:10,reviewsOnPageLoad:10,showLoadMore:!0,showOrderby:!0,showReviewDate:!0,showReviewerName:!0,showReviewImage:!0,showReviewRating:!0,showReviewContent:!0,previewReviews:[{id:1,date_created:"2019-07-15T17:05:04",formatted_date_created:Object(o.__)("July 15, 2019",'woocommerce'),date_created_gmt:"2019-07-15T15:05:04",product_id:0,product_name:Object(o.__)("WordPress Pennant",'woocommerce'),product_permalink:"#",
/* translators: An example person name used for the block previews. */
reviewer:Object(o.__)("Alice",'woocommerce'),review:`<p>${Object(o.__)("I bought this product last week and I'm very happy with it.",'woocommerce')}</p>\n`,reviewer_avatar_urls:{48:n.o.defaultAvatar,96:n.o.defaultAvatar},rating:5,verified:!0},{id:2,date_created:"2019-07-12T12:39:39",formatted_date_created:Object(o.__)("July 12, 2019",'woocommerce'),date_created_gmt:"2019-07-12T10:39:39",product_id:0,product_name:Object(o.__)("WordPress Pennant",'woocommerce'),product_permalink:"#",
/* translators: An example person name used for the block previews. */
reviewer:Object(o.__)("Bob",'woocommerce'),review:`<p>${Object(o.__)("This product is awesome, I love it!",'woocommerce')}</p>\n`,reviewer_avatar_urls:{48:n.o.defaultAvatar,96:n.o.defaultAvatar},rating:null,verified:!1}]}}},139:function(e,t,r){"use strict";t.a={editMode:{type:"boolean",default:!0},imageType:{type:"string",default:"reviewer"},orderby:{type:"string",default:"most-recent"},reviewsOnLoadMore:{type:"number",default:10},reviewsOnPageLoad:{type:"number",default:10},showLoadMore:{type:"boolean",default:!0},showOrderby:{type:"boolean",default:!0},showReviewDate:{type:"boolean",default:!0},showReviewerName:{type:"boolean",default:!0},showReviewImage:{type:"boolean",default:!0},showReviewRating:{type:"boolean",default:!0},showReviewContent:{type:"boolean",default:!0},previewReviews:{type:"array",default:null}}},14:function(e,t){e.exports=window.wp.blocks},140:function(e,t,r){"use strict";var o=r(5),n=r.n(o),c=r(0),a=r(6),s=(r(152),r(56));t.a=e=>{let{attributes:t}=e;return Object(c.createElement)("div",n()({},a.useBlockProps.save({className:Object(s.a)(t)}),Object(s.b)(t)))}},142:function(e,t,r){"use strict";var o=r(0),n=r(1),c=(r(10),r(7)),a=r(3),s=r(6),i=r(8),l=r(2),d=r(74),u=r(29);r(177);var b=e=>{let{onClick:t,label:r=Object(n.__)("Load more",'woocommerce'),screenReaderLabel:c=Object(n.__)("Load more",'woocommerce')}=e;return Object(o.createElement)("div",{className:"wp-block-button wc-block-load-more wc-block-components-load-more"},Object(o.createElement)("button",{className:"wp-block-button__link",onClick:t},Object(o.createElement)(u.a,{label:r,screenReaderLabel:c})))},w=r(119);r(174);var p=e=>{let{onChange:t,readOnly:r,value:c}=e;return Object(o.createElement)(w.a,{className:"wc-block-review-sort-select wc-block-components-review-sort-select",label:Object(n.__)("Order by",'woocommerce'),onChange:t,options:[{key:"most-recent",label:Object(n.__)("Most recent",'woocommerce')},{key:"highest-rating",label:Object(n.__)("Highest rating",'woocommerce')},{key:"lowest-rating",label:Object(n.__)("Lowest rating",'woocommerce')}],readOnly:r,screenReaderLabel:Object(n.__)("Order reviews by",'woocommerce'),value:c})},m=r(4),g=r.n(m),h=r(24),v=r.n(h),_=r(163),O=r.n(_);const j=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";const o=O()(e,{suffix:r,limit:t});return o.html},f=(e,t,r)=>(t<=r?e.start=e.middle+1:e.end=e.middle-1,e),k=(e,t,r,o)=>{const n=((e,t,r)=>{let o={start:0,middle:0,end:e.length};for(;o.start<=o.end;)o.middle=Math.floor((o.start+o.end)/2),t.innerHTML=j(e,o.middle),o=f(o,t.clientHeight,r);return o.middle})(e,t,r);return j(e,n-o.length,o)},y={className:"read-more-content",ellipsis:"&hellip;",lessText:Object(n.__)("Read less",'woocommerce'),maxLines:3,moreText:Object(n.__)("Read more",'woocommerce')};class R extends i.Component{constructor(e){super(e),this.state={isExpanded:!1,clampEnabled:null,content:e.children,summary:"."},this.reviewContent=Object(i.createRef)(),this.reviewSummary=Object(i.createRef)(),this.getButton=this.getButton.bind(this),this.onClick=this.onClick.bind(this)}componentDidMount(){this.setSummary()}componentDidUpdate(e){e.maxLines===this.props.maxLines&&e.children===this.props.children||this.setState({clampEnabled:null,summary:"."},this.setSummary)}setSummary(){if(this.props.children){const{maxLines:e,ellipsis:t}=this.props;if(!this.reviewSummary.current||!this.reviewContent.current)return;const r=(this.reviewSummary.current.clientHeight+1)*e+1,o=this.reviewContent.current.clientHeight+1>r;this.setState({clampEnabled:o}),o&&this.setState({summary:k(this.reviewContent.current.innerHTML,this.reviewSummary.current,r,t)})}}getButton(){const{isExpanded:e}=this.state,{className:t,lessText:r,moreText:n}=this.props,c=e?r:n;if(c)return Object(o.createElement)("a",{href:"#more",className:t+"__read_more",onClick:this.onClick,"aria-expanded":!e,role:"button"},c)}onClick(e){e.preventDefault();const{isExpanded:t}=this.state;this.setState({isExpanded:!t})}render(){const{className:e}=this.props,{content:t,summary:r,clampEnabled:n,isExpanded:c}=this.state;return t?!1===n?Object(o.createElement)("div",{className:e},Object(o.createElement)("div",{ref:this.reviewContent},t)):Object(o.createElement)("div",{className:e},(!c||null===n)&&Object(o.createElement)("div",{ref:this.reviewSummary,"aria-hidden":c,dangerouslySetInnerHTML:{__html:r}}),(c||null===n)&&Object(o.createElement)("div",{ref:this.reviewContent,"aria-hidden":!c},t),this.getButton()):null}}v()(R,"defaultProps",y);var E=R;r(176);var C=e=>{let{attributes:t,review:r={}}=e;const{imageType:c,showReviewDate:a,showReviewerName:s,showReviewImage:i,showReviewRating:l,showReviewContent:d,showProductName:u}=t,{rating:b}=r,w=!Object.keys(r).length>0,p=Number.isFinite(b)&&l;return Object(o.createElement)("li",{className:g()("wc-block-review-list-item__item","wc-block-components-review-list-item__item",{"is-loading":w,"wc-block-components-review-list-item__item--has-image":i}),"aria-hidden":w},(u||a||s||i||p)&&Object(o.createElement)("div",{className:"wc-block-review-list-item__info wc-block-components-review-list-item__info"},i&&function(e,t,r){var c,a;return r||!e?Object(o.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"}):Object(o.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"},"product"===t?Object(o.createElement)("img",{"aria-hidden":"true",alt:(null===(c=e.product_image)||void 0===c?void 0:c.alt)||"",src:(null===(a=e.product_image)||void 0===a?void 0:a.thumbnail)||""}):Object(o.createElement)("img",{"aria-hidden":"true",alt:"",src:e.reviewer_avatar_urls[96]||""}),e.verified&&Object(o.createElement)("div",{className:"wc-block-review-list-item__verified wc-block-components-review-list-item__verified",title:Object(n.__)("Verified buyer",'woocommerce')},Object(n.__)("Verified buyer",'woocommerce')))}(r,c,w),(u||s||p||a)&&Object(o.createElement)("div",{className:"wc-block-review-list-item__meta wc-block-components-review-list-item__meta"},p&&function(e){const{rating:t}=e,r={width:t/5*100+"%"},c=Object(n.sprintf)(
/* translators: %f is referring to the average rating value */
Object(n.__)("Rated %f out of 5",'woocommerce'),t),a={__html:Object(n.sprintf)(
/* translators: %s is referring to the average rating value */
Object(n.__)("Rated %s out of 5",'woocommerce'),Object(n.sprintf)('<strong class="rating">%f</strong>',t))};return Object(o.createElement)("div",{className:"wc-block-review-list-item__rating wc-block-components-review-list-item__rating"},Object(o.createElement)("div",{className:"wc-block-review-list-item__rating__stars wc-block-components-review-list-item__rating__stars",role:"img","aria-label":c},Object(o.createElement)("span",{style:r,dangerouslySetInnerHTML:a})))}(r),u&&function(e){return Object(o.createElement)("div",{className:"wc-block-review-list-item__product wc-block-components-review-list-item__product"},Object(o.createElement)("a",{href:e.product_permalink,dangerouslySetInnerHTML:{__html:e.product_name}}))}(r),s&&function(e){const{reviewer:t=""}=e;return Object(o.createElement)("div",{className:"wc-block-review-list-item__author wc-block-components-review-list-item__author"},t)}(r),a&&function(e){const{date_created:t,formatted_date_created:r}=e;return Object(o.createElement)("time",{className:"wc-block-review-list-item__published-date wc-block-components-review-list-item__published-date",dateTime:t},r)}(r))),d&&function(e){return Object(o.createElement)(E,{maxLines:10,moreText:Object(n.__)("Read full review",'woocommerce'),lessText:Object(n.__)("Hide full review",'woocommerce'),className:"wc-block-review-list-item__text wc-block-components-review-list-item__text"},Object(o.createElement)("div",{dangerouslySetInnerHTML:{__html:e.review||""}}))}(r))};r(175);var S=e=>{let{attributes:t,reviews:r}=e;const n=Object(l.getSetting)("showAvatars",!0),c=Object(l.getSetting)("reviewRatingsEnabled",!0),a=(n||"product"===t.imageType)&&t.showReviewImage,s=c&&t.showReviewRating,i={...t,showReviewImage:a,showReviewRating:s};return Object(o.createElement)("ul",{className:"wc-block-review-list wc-block-components-review-list"},0===r.length?Object(o.createElement)(C,{attributes:i}):r.map((e,t)=>Object(o.createElement)(C,{key:e.id||t,attributes:i,review:e})))},N=r(5),P=r.n(N),T=r(25),L=r.n(T),x=r(56),A=r(27);class I extends i.Component{render(){const{attributes:e,error:t,isLoading:r,noReviewsPlaceholder:c,reviews:s,totalReviews:i}=this.props;if(t)return Object(o.createElement)(d.a,{className:"wc-block-featured-product-error",error:t,isLoading:r});if(0===s.length&&!r)return Object(o.createElement)(c,{attributes:e});const u=Object(l.getSetting)("reviewRatingsEnabled",!0);return Object(o.createElement)(a.Disabled,null,e.showOrderby&&u&&Object(o.createElement)(p,{readOnly:!0,value:e.orderby}),Object(o.createElement)(S,{attributes:e,reviews:s}),e.showLoadMore&&i>s.length&&Object(o.createElement)(b,{screenReaderLabel:Object(n.__)("Load more reviews",'woocommerce')}))}}var M=(e=>{class t extends i.Component{constructor(){super(...arguments),v()(this,"isPreview",!!this.props.attributes.previewReviews),v()(this,"delayedAppendReviews",this.props.delayFunction(this.appendReviews)),v()(this,"isMounted",!1),v()(this,"state",{error:null,loading:!0,reviews:this.isPreview?this.props.attributes.previewReviews:[],totalReviews:this.isPreview?this.props.attributes.previewReviews.length:0}),v()(this,"setError",async e=>{if(!this.isMounted)return;const{onReviewsLoadError:t}=this.props,r=await Object(A.a)(e);this.setState({reviews:[],loading:!1,error:r}),t(r)})}componentDidMount(){this.isMounted=!0,this.replaceReviews()}componentDidUpdate(e){e.reviewsToDisplay<this.props.reviewsToDisplay?this.delayedAppendReviews():this.shouldReplaceReviews(e,this.props)&&this.replaceReviews()}shouldReplaceReviews(e,t){return e.orderby!==t.orderby||e.order!==t.order||e.productId!==t.productId||!L()(e.categoryIds,t.categoryIds)}componentWillUnmount(){this.isMounted=!1,this.delayedAppendReviews.cancel&&this.delayedAppendReviews.cancel()}getArgs(e){const{categoryIds:t,order:r,orderby:o,productId:n,reviewsToDisplay:c}=this.props,a={order:r,orderby:o,per_page:c-e,offset:e};return t&&t.length&&(a.category_id=Array.isArray(t)?t.join(","):t),n&&(a.product_id=n),a}replaceReviews(){if(this.isPreview)return;const{onReviewsReplaced:e}=this.props;this.updateListOfReviews().then(e)}appendReviews(){if(this.isPreview)return;const{onReviewsAppended:e,reviewsToDisplay:t}=this.props,{reviews:r}=this.state;t<=r.length||this.updateListOfReviews(r).then(e)}updateListOfReviews(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const{reviewsToDisplay:t}=this.props,{totalReviews:r}=this.state,o=Math.min(r,t)-e.length;return this.setState({loading:!0,reviews:e.concat(Array(o).fill({}))}),Object(x.c)(this.getArgs(e.length)).then(t=>{let{reviews:r,totalReviews:o}=t;return this.isMounted&&this.setState({reviews:e.filter(e=>Object.keys(e).length).concat(r),totalReviews:o,loading:!1,error:null}),{newReviews:r}}).catch(this.setError)}render(){const{reviewsToDisplay:t}=this.props,{error:r,loading:n,reviews:c,totalReviews:a}=this.state;return Object(o.createElement)(e,P()({},this.props,{error:r,isLoading:n,reviews:c.slice(0,t),totalReviews:a}))}}v()(t,"defaultProps",{delayFunction:e=>e,onReviewsAppended:()=>{},onReviewsLoadError:()=>{},onReviewsReplaced:()=>{}});const{displayName:r=e.name||"Component"}=e;return t.displayName=`WithReviews( ${r} )`,t})(I);t.a=e=>{let{attributes:t,icon:r,name:i,noReviewsPlaceholder:l}=e;const{categoryIds:d,productId:u,reviewsOnPageLoad:b,showProductName:w,showReviewDate:p,showReviewerName:m,showReviewContent:g,showReviewImage:h,showReviewRating:v}=t,{order:_,orderby:O}=Object(x.d)(t.orderby),j=!(g||v||p||m||h||w),f=Object(s.useBlockProps)({className:Object(x.a)(t)});return j?Object(o.createElement)(a.Placeholder,{icon:r,label:i},Object(n.__)("The content for this block is hidden due to block settings.",'woocommerce')):Object(o.createElement)("div",f,Object(o.createElement)(M,{attributes:t,categoryIds:d,delayFunction:e=>Object(c.debounce)(e,400),noReviewsPlaceholder:l,orderby:O,order:_,productId:u,reviewsToDisplay:b}))}},152:function(e,t){},153:function(e,t){},174:function(e,t){},175:function(e,t){},176:function(e,t){},177:function(e,t){},2:function(e,t){e.exports=window.wc.wcSettings},22:function(e,t,r){"use strict";r.d(t,"o",(function(){return c})),r.d(t,"m",(function(){return a})),r.d(t,"l",(function(){return s})),r.d(t,"n",(function(){return i})),r.d(t,"j",(function(){return l})),r.d(t,"e",(function(){return d})),r.d(t,"f",(function(){return u})),r.d(t,"g",(function(){return b})),r.d(t,"k",(function(){return w})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return m})),r.d(t,"h",(function(){return g})),r.d(t,"a",(function(){return h})),r.d(t,"i",(function(){return v})),r.d(t,"b",(function(){return _}));var o,n=r(2);const c=Object(n.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),a=c.pluginUrl+"images/",s=c.pluginUrl+"build/",i=c.buildPhase,l=null===(o=n.STORE_PAGES.shop)||void 0===o?void 0:o.permalink,d=n.STORE_PAGES.checkout.id,u=n.STORE_PAGES.checkout.permalink,b=n.STORE_PAGES.privacy.permalink,w=(n.STORE_PAGES.privacy.title,n.STORE_PAGES.terms.permalink),p=(n.STORE_PAGES.terms.title,n.STORE_PAGES.cart.id),m=n.STORE_PAGES.cart.permalink,g=(n.STORE_PAGES.myaccount.permalink?n.STORE_PAGES.myaccount.permalink:Object(n.getSetting)("wpLoginUrl","/wp-login.php"),Object(n.getSetting)("shippingCountries",{})),h=Object(n.getSetting)("allowedCountries",{}),v=Object(n.getSetting)("shippingStates",{}),_=Object(n.getSetting)("allowedStates",{})},25:function(e,t){e.exports=window.wp.isShallowEqual},27:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c}));var o=r(1);const n=async e=>{if("function"==typeof e.json)try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}return{message:e.message,type:e.type||"general"}},c=e=>{if(e.data&&"rest_invalid_param"===e.code){const t=Object.values(e.data.params);if(t[0])return t[0]}return(null==e?void 0:e.message)||Object(o.__)("Something went wrong. Please contact us to get assistance.",'woocommerce')}},29:function(e,t,r){"use strict";var o=r(0),n=r(4),c=r.n(n);t.a=e=>{let t,{label:r,screenReaderLabel:n,wrapperElement:a,wrapperProps:s={}}=e;const i=null!=r,l=null!=n;return!i&&l?(t=a||"span",s={...s,className:c()(s.className,"screen-reader-text")},Object(o.createElement)(t,s,n)):(t=a||o.Fragment,i&&l&&r!==n?Object(o.createElement)(t,s,Object(o.createElement)("span",{"aria-hidden":"true"},r),Object(o.createElement)("span",{className:"screen-reader-text"},n)):Object(o.createElement)(t,s,r))}},3:function(e,t){e.exports=window.wp.components},31:function(e,t){e.exports=window.wp.escapeHtml},32:function(e,t,r){"use strict";var o=r(0),n=r(1),c=r(31);t.a=e=>{let{error:t}=e;return Object(o.createElement)("div",{className:"wc-block-error-message"},(e=>{let{message:t,type:r}=e;return t?"general"===r?Object(o.createElement)("span",null,Object(n.__)("The following error was returned",'woocommerce'),Object(o.createElement)("br",null),Object(o.createElement)("code",null,Object(c.escapeHTML)(t))):"api"===r?Object(o.createElement)("span",null,Object(n.__)("The following error was returned from the API",'woocommerce'),Object(o.createElement)("br",null),Object(o.createElement)("code",null,Object(c.escapeHTML)(t))):t:Object(n.__)("An unknown error occurred which prevented the block from being updated.",'woocommerce')})(t))}},357:function(e,t,r){e.exports=r(462)},462:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r(1),c=r(14),a=r(112),s=r(497),i=(r(152),r(6)),l=r(3),d=(r(10),r(142)),u=()=>Object(o.createElement)(l.Placeholder,{className:"wc-block-all-reviews",icon:Object(o.createElement)(a.a,{icon:s.a,className:"block-editor-block-icon"}),label:Object(n.__)("All Reviews",'woocommerce')},Object(n.__)("This block shows a list of all product reviews. Your store does not have any reviews yet, but they will show up here when it does.",'woocommerce')),b=r(104),w=r(139),p=r(140),m=r(122);Object(c.registerBlockType)("woocommerce/all-reviews",{apiVersion:2,title:Object(n.__)("All Reviews",'woocommerce'),icon:{src:Object(o.createElement)(a.a,{icon:s.a,className:"wc-block-editor-components-block-icon"})},category:"woocommerce",keywords:[Object(n.__)("WooCommerce",'woocommerce')],description:Object(n.__)("Show a list of all product reviews.",'woocommerce'),supports:{html:!1,color:{background:!1},typography:{fontSize:!0}},example:{...m.a,attributes:{...m.a.attributes,showProductName:!0}},attributes:{...w.a,showProductName:{type:"boolean",default:!0}},transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:e=>{let{idBase:t,instance:r}=e;return"woocommerce_recent_reviews"===t&&!(null==r||!r.raw)},transform:e=>{let{instance:t}=e;return Object(c.createBlock)("woocommerce/all-reviews",{reviewsOnPageLoad:t.raw.number,imageType:"product",showLoadMore:!1,showOrderby:!1,showReviewDate:!1,showReviewContent:!1})}}]},edit:e=>{let{attributes:t,setAttributes:r}=e;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.InspectorControls,{key:"inspector"},Object(o.createElement)(l.PanelBody,{title:Object(n.__)("Content",'woocommerce')},Object(o.createElement)(l.ToggleControl,{label:Object(n.__)("Product name",'woocommerce'),checked:t.showProductName,onChange:()=>r({showProductName:!t.showProductName})}),Object(b.b)(t,r)),Object(o.createElement)(l.PanelBody,{title:Object(n.__)("List Settings",'woocommerce')},Object(b.c)(t,r))),Object(o.createElement)(d.a,{attributes:t,icon:Object(o.createElement)(a.a,{icon:s.a,className:"block-editor-block-icon"}),name:Object(n.__)("All Reviews",'woocommerce'),noReviewsPlaceholder:u}))},save:p.a})},56:function(e,t,r){"use strict";r.d(t,"d",(function(){return i})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u}));var o=r(12),n=r.n(o),c=r(4),a=r.n(c),s=r(2);const i=e=>{if(Object(s.getSetting)("reviewRatingsEnabled",!0)){if("lowest-rating"===e)return{order:"asc",orderby:"rating"};if("highest-rating"===e)return{order:"desc",orderby:"rating"}}return{order:"desc",orderby:"date_gmt"}},l=e=>n()({path:"/wc/store/v1/products/reviews?"+Object.entries(e).map(e=>e.join("=")).join("&"),parse:!1}).then(e=>e.json().then(t=>({reviews:t,totalReviews:parseInt(e.headers.get("x-wp-total"),10)}))),d=e=>{const{className:t,categoryIds:r,productId:o,showReviewDate:n,showReviewerName:c,showReviewContent:s,showProductName:i,showReviewImage:l,showReviewRating:d}=e;let u="wc-block-all-reviews";return o&&(u="wc-block-reviews-by-product"),Array.isArray(r)&&(u="wc-block-reviews-by-category"),a()(u,t,{"has-image":l,"has-name":c,"has-date":n,"has-rating":d,"has-content":s,"has-product-name":i})},u=e=>{const{categoryIds:t,imageType:r,orderby:o,productId:n,reviewsOnPageLoad:c,reviewsOnLoadMore:a,showLoadMore:s,showOrderby:i}=e,l={"data-image-type":r,"data-orderby":o,"data-reviews-on-page-load":c,"data-reviews-on-load-more":a,"data-show-load-more":s,"data-show-orderby":i};return n&&(l["data-product-id"]=n),Array.isArray(t)&&(l["data-category-ids"]=t.join(",")),l}},58:function(e,t,r){"use strict";var o=r(5),n=r.n(o),c=r(0),a=r(4),s=r.n(a),i=r(3),l=r(9);r(89);class d extends c.Component{constructor(){super(...arguments),this.onClick=this.onClick.bind(this)}onClick(e){this.props.onChange&&this.props.onChange(e.target.value)}render(){const{label:e,checked:t,instanceId:r,className:o,help:a,options:l,value:d}=this.props,u="inspector-toggle-button-control-"+r;let b;return a&&(b="function"==typeof a?a(t):a),Object(c.createElement)(i.BaseControl,{id:u,help:b,className:s()("components-toggle-button-control",o)},Object(c.createElement)("label",{id:u+"__label",htmlFor:u,className:"components-toggle-button-control__label"},e),Object(c.createElement)(i.ButtonGroup,{"aria-labelledby":u+"__label"},l.map((t,r)=>{const o={};return d===t.value?(o.isPrimary=!0,o["aria-pressed"]=!0):(o.isSecondary=!0,o["aria-pressed"]=!1),Object(c.createElement)(i.Button,n()({key:`${t.label}-${t.value}-${r}`,value:t.value,onClick:this.onClick,"aria-label":e+": "+t.label},o),t.label)})))}}t.a=Object(l.withInstanceId)(d)},6:function(e,t){e.exports=window.wp.blockEditor},7:function(e,t){e.exports=window.lodash},74:function(e,t,r){"use strict";var o=r(0),n=r(1),c=r(112),a=r(168),s=r(4),i=r.n(s),l=r(3),d=r(32);r(113),t.a=e=>{let{className:t,error:r,isLoading:s=!1,onRetry:u}=e;return Object(o.createElement)(l.Placeholder,{icon:Object(o.createElement)(c.a,{icon:a.a}),label:Object(n.__)("Sorry, an error occurred",'woocommerce'),className:i()("wc-block-api-error",t)},Object(o.createElement)(d.a,{error:r}),u&&Object(o.createElement)(o.Fragment,null,s?Object(o.createElement)(l.Spinner,null):Object(o.createElement)(l.Button,{isSecondary:!0,onClick:u},Object(n.__)("Retry",'woocommerce'))))}},8:function(e,t){e.exports=window.React},89:function(e,t){},9:function(e,t){e.exports=window.wp.compose}});