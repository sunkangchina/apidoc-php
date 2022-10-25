import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,b as n,d as a,e as s,a as c,r as l}from"./app.8cad6118.js";const d={},p=n("h1",{id:"\u5EFA\u8BAE\u53CA\u89C4\u8303",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5EFA\u8BAE\u53CA\u89C4\u8303","aria-hidden":"true"},"#"),s(" \u5EFA\u8BAE\u53CA\u89C4\u8303")],-1),u=n("h2",{id:"\u5EFA\u8BAE",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5EFA\u8BAE","aria-hidden":"true"},"#"),s(" \u5EFA\u8BAE")],-1),r=s("\u5982\u679C\u4F60\u4F7F\u7528PHPStorm\u7684\u8BDD\uFF0C\u5EFA\u8BAE\u5B89\u88C5PHP "),m={href:"https://plugins.jetbrains.com/plugin/7320-php-annotations",target:"_blank",rel:"noopener noreferrer"},h=s("Annotations\u63D2\u4EF6"),v=s("\uFF0C\u53EF\u4EE5\u652F\u6301\u6CE8\u89E3\u7684\u8BED\u6CD5\u63D0\u793A\u53CA\u81EA\u52A8\u5B8C\u6210"),k=s("\u914D\u5408\u67E5\u770B"),q={href:"https://apidoc.demo.hg-code.com/apidoc/?appKey=admin",target:"_blank",rel:"noopener noreferrer"},_=s("\u6F14\u793A\u9879\u76EE"),b=s("\u4E0E"),f={href:"https://github.com/HGthecode/thinkphp-apidoc-demo",target:"_blank",rel:"noopener noreferrer"},g=s("\u6F14\u793A\u6E90\u7801"),x=s("\u4E0A\u624B\u66F4\u5FEB\u54E6\uFF01"),y=c(`<h2 id="\u4E66\u5199\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u4E66\u5199\u89C4\u8303" aria-hidden="true">#</a> \u4E66\u5199\u89C4\u8303</h2><div class="custom-container warning"><p class="custom-container-title">\u4E66\u5199\u53C2\u6570\u65F6\u6709\u5982\u4E0B\u51E0\u4E2A\u89C4\u8303</p><ul><li>\u63A7\u5236\u5668\u5FC5\u987B<code>use</code>\u5F15\u5165\u6CE8\u91CA\u89E3\u91CA\u6587\u4EF6</li><li>\u6BCF\u4E2A\u53C2\u6570\u4EE5 @+\u53C2\u6570\u540D(&quot;\u53C2\u6570\u503C&quot;,\u5B50\u53C2\u6570\u540D=&quot;\u5B50\u53C2\u6570\u503C&quot;,...)</li><li>\u5B50\u53C2\u6570\u9700\u7528\u53CC\u5F15\u53F7\u5305\u88F9</li></ul></div><h2 id="\u4E3E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4E3E\u4F8B" aria-hidden="true">#</a> \u4E3E\u4F8B</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">app<span class="token punctuation">\\</span>demo<span class="token punctuation">\\</span>controller</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">app<span class="token punctuation">\\</span>BaseController</span><span class="token punctuation">;</span>
<span class="token comment">// \u5FC5\u987B\u7684</span>
<span class="token keyword">use</span> <span class="token package">hg<span class="token punctuation">\\</span>apidoc<span class="token punctuation">\\</span>annotation</span> <span class="token keyword">as</span> Apidoc<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u57FA\u7840\u793A\u4F8B
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Base</span> <span class="token keyword">extends</span> <span class="token class-name">BaseController</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * @Apidoc\\Title(&quot;\u57FA\u7840\u7684\u63A5\u53E3\u6F14\u793A&quot;)
     * @Apidoc\\Author(&quot;HG&quot;)
     * @Apidoc\\Tag(&quot;\u57FA\u7840,\u793A\u4F8B&quot;)
     * @Apidoc\\Url (&quot;/demo/base/index&quot;)
     * @Apidoc\\Method (&quot;GET&quot;)
     * @Apidoc\\Query(&quot;name&quot;, type=&quot;string&quot;,require=true, desc=&quot;\u59D3\u540D&quot;,mock=&quot;@name&quot;)
     * @Apidoc\\Query(&quot;phone&quot;, type=&quot;string&quot;,require=true, desc=&quot;\u624B\u673A\u53F7&quot;,mock=&quot;@phone&quot;)
     * @Apidoc\\Query(&quot;sex&quot;, type=&quot;int&quot;,desc=&quot;\u6027\u522B&quot; ,mock=&quot;@integer(0, 1)&quot;)
     * @Apidoc\\Returned(&quot;id&quot;, type=&quot;int&quot;, desc=&quot;id&quot;)
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function A(w,B){const e=l("ExternalLinkIcon");return o(),i("div",null,[p,u,n("ul",null,[n("li",null,[n("p",null,[r,n("a",m,[h,a(e)]),v])]),n("li",null,[n("p",null,[k,n("a",q,[_,a(e)]),b,n("a",f,[g,a(e)]),x])])]),y])}const N=t(d,[["render",A],["__file","index.html.vue"]]);export{N as default};
