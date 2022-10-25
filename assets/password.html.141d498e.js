import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,a as t}from"./app.8cad6118.js";const e={},p=t(`<h1 id="\u8BBF\u95EE\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u5BC6\u7801" aria-hidden="true">#</a> \u8BBF\u95EE\u5BC6\u7801</h1><h2 id="\u5168\u5C40\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5BC6\u7801" aria-hidden="true">#</a> \u5168\u5C40\u5BC6\u7801</h2><p>\u914D\u7F6E\u6587\u4EF6<code>apidoc.php</code>\u4E2D\u7684 auth \u8BBE\u7F6E\u5982\u4E0B\uFF0C\u5373\u53EF\u5728\u8BBF\u95EE\u6587\u6863\u9875\u9762\u65F6\u9700\u8F93\u5165\u5BC6\u7801\u8BBF\u95EE\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// apidoc.php</span>
<span class="token comment">// \u6743\u9650\u8BA4\u8BC1\u914D\u7F6E</span>
<span class="token string single-quoted-string">&#39;auth&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u662F\u5426\u542F\u7528\u5BC6\u7801\u9A8C\u8BC1</span>
    <span class="token string single-quoted-string">&#39;enable&#39;</span>     <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u9A8C\u8BC1\u5BC6\u7801</span>
    <span class="token string single-quoted-string">&#39;password&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;123456&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5BC6\u7801\u52A0\u5BC6\u76D0</span>
    <span class="token string single-quoted-string">&#39;secret_key&#39;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;apidoc#hg_code&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6709\u6548\u671F</span>
    <span class="token string single-quoted-string">&#39;expire&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">24</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">60</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E94\u7528-\u7248\u672C\u72EC\u7ACB\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528-\u7248\u672C\u72EC\u7ACB\u5BC6\u7801" aria-hidden="true">#</a> \u5E94\u7528/\u7248\u672C\u72EC\u7ACB\u5BC6\u7801</h2><p>apidoc.php\u914D\u7F6E\u6587\u4EF6\u5C06\u6307\u5B9A\u5E94\u7528/\u7248\u672C\uFF0C\u8BBE\u7F6E<code>password</code>\u5B57\u6BB5\uFF0C\u4FBF\u53EF\u5F00\u542F\u8BE5\u5E94\u7528\u7684\u8BBF\u95EE\u5BC6\u7801</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// /config/apidoc.php</span>

<span class="token string single-quoted-string">&#39;apps&#39;</span>           <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;\u540E\u53F0\u7BA1\u7406&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;path&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;app\\admin\\controller&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;key&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;123&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;\u6F14\u793A\u793A\u4F8B&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;key&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;demo&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;items&#39;</span><span class="token operator">=&gt;</span><span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;V1.0&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;path&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;app\\demo\\controller\\v1&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;key&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;v1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;V2.0&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;path&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;app\\demo\\controller\\v2&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;key&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;v2&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;456&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4E0A\u914D\u7F6E\uFF0C\u8BBF\u95EE<code>admin</code>\u5E94\u7528\u9700\u8981\u4F7F\u7528<code>123</code>\u8FDB\u884C\u5BC6\u7801\u6821\u9A8C\uFF1B\u8BBF\u95EE<code>demo \u7684v2</code>\u65F6\u9700\u8981<code>456</code>\u8FDB\u884C\u5BC6\u7801\u6821\u9A8C</p>`,8),o=[p];function i(l,c){return n(),a("div",null,o)}const u=s(e,[["render",i],["__file","password.html.vue"]]);export{u as default};
