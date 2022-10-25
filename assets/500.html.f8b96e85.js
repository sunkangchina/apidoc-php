import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as e}from"./app.8cad6118.js";const p={},i=e(`<h1 id="\u9875\u9762500\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762500\u9519\u8BEF" aria-hidden="true">#</a> \u9875\u9762500\u9519\u8BEF</h1><blockquote><p>\u8BBF\u95EEapidoc\u9875\u9762\u65F6\uFF0C\u4EE5\u4E0B\u539F\u56E0\u6709\u53EF\u80FD\u5BFC\u81F4\u9875\u9762\u663E\u793A 500 \u9519\u8BEF</p></blockquote><h2 id="\u6CE8\u89E3\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u89E3\u9519\u8BEF" aria-hidden="true">#</a> \u6CE8\u89E3\u9519\u8BEF</h2><p>\u9879\u76EE\u6240\u6709\u88AB\u89E3\u6790\u6587\u4EF6\u7684\u6CE8\u91CA\u4E2D\u5B58\u5728 @XXX \u7684\uFF0C\u90FD\u9700<code>use</code>\u5F15\u5165\u6CE8\u91CA\u89E3\u91CA\u6587\u4EF6\uFF0C\u5982\u51FA\u73B0\u4EE5\u4E0B\u9519\u8BEF</p><p>\u53EF\u6839\u636E\u63D0\u793A\u5728\u76F8\u5E94\u7684\u6587\u4EF6\u91CC\uFF0C\u52A0\u4E0Ause\u89E3\u91CA\u6587\u4EF6</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">app<span class="token punctuation">\\</span>controller</span><span class="token punctuation">;</span>

<span class="token comment">// \u52A0\u4E0A\u8FD9\u53E5</span>
<span class="token keyword">use</span> <span class="token package">hg<span class="token punctuation">\\</span>apidoc<span class="token punctuation">\\</span>annotation</span> <span class="token keyword">as</span> Apidoc<span class="token punctuation">;</span>
<span class="token comment">// \u901A\u8FC7use\u81EA\u5B9A\u4E49\u89E3\u91CA\u6587\u4EF6\uFF0C\u89E3\u51B3\u4E0B\u9762@abc\u7684\u9519\u8BEF</span>
<span class="token comment">// use app\\utils\\Abc;</span>

<span class="token doc-comment comment">/**
 * @Apidoc\\Title(&quot;\u57FA\u7840\u793A\u4F8B&quot;)
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">BaseDemo</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * @Apidoc\\Title(&quot;\u5F15\u5165\u901A\u7528\u6CE8\u91CA&quot;)
     * <span class="token keyword">@abc</span> \u9519\u8BEF\u793A\u4F8B\uFF0C\u8FD9\u6837\u4E0D\u5B58\u5728\u89E3\u91CA\u6587\u4EF6\u7684\u6CE8\u91CA\u4F1A\u62A5\u9519\uFF1B\u53EF\u589E\u52A0use\u89E3\u91CA\u6587\u4EF6\uFF0C\u6216\u53BB\u9664@
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81EA\u5B9A\u4E49\u89E3\u91CA\u6587\u4EF6</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>// app/utils/Abc.php \u89E3\u91CA\u6587\u4EF6\u5185\u5BB9
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">app<span class="token punctuation">\\</span>utils</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>Common<span class="token punctuation">\\</span>Annotations<span class="token punctuation">\\</span>Annotation</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u81EA\u5B9A\u4E49\u53C2\u6570\u89E3\u91CA\u6587\u4EF6
 * <span class="token keyword">@package</span> <span class="token class-name">hg<span class="token punctuation">\\</span>apidoc<span class="token punctuation">\\</span>annotation</span>
 * @Annotation
 * @Target(<span class="token punctuation">{</span>&quot;METHOD&quot;,&quot;CLASS&quot;<span class="token punctuation">}</span>)
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Abc</span> <span class="token keyword">extends</span> <span class="token class-name">Annotation</span>
<span class="token punctuation">{</span><span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u5FFD\u7565\u5E26@\u7684\u6CE8\u89E3\u62A5\u9519\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// apidoc.php</span>
<span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;ignored_annitation&#39;</span><span class="token operator">=&gt;</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;abc&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9519\u8BEF" aria-hidden="true">#</a> \u914D\u7F6E\u9519\u8BEF</h2><p>\u901A\u5E38\u662Fconfig/apidoc.php\u7684\u914D\u7F6E\u9879\u914D\u7F6E\u9519\u8BEF\u5BFC\u81F4\u6B64\u7C7B\u9519\u8BEF\uFF0C\u914D\u7F6E\u9519\u4E00\u822C\u4F1A\u5728\u9875\u9762\u63D0\u793A\u51FA\u5177\u4F53\u7684\u9519\u8BEF\u4FE1\u606F\uFF0C\u6839\u636E\u63D0\u793A\u68C0\u67E5\u914D\u7F6E\u9879\u662F\u5426\u914D\u7F6E\u6B63\u786E\u5373\u53EF</p><h2 id="ref\u5F15\u5165\u6587\u4EF6\u4E0D\u5B58\u5728" tabindex="-1"><a class="header-anchor" href="#ref\u5F15\u5165\u6587\u4EF6\u4E0D\u5B58\u5728" aria-hidden="true">#</a> ref\u5F15\u5165\u6587\u4EF6\u4E0D\u5B58\u5728</h2><p>\u5728\u63A5\u53E3\u6CE8\u89E3\u65F6\uFF0C\u4F7F\u7528ref\u5F15\u7528\u4E86\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u6587\u4EF6\uFF0C\u4E5F\u53EF\u80FD\u51FA\u73B0\u8BE5\u9519\u8BEF</p>`,14),t=[i];function c(o,l){return s(),a("div",null,t)}const r=n(p,[["render",c],["__file","500.html.vue"]]);export{r as default};
