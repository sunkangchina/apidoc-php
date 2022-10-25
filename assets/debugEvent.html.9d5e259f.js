import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as t,a}from"./app.8cad6118.js";const d={},r=a(`<h1 id="\u8C03\u8BD5\u65F6\u7684\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8C03\u8BD5\u65F6\u7684\u4E8B\u4EF6" aria-hidden="true">#</a> \u8C03\u8BD5\u65F6\u7684\u4E8B\u4EF6</h1><p>\u63A5\u53E3\u8C03\u8BD5\u65F6\u5206\u522B\u89E6\u53D1<code>before</code>\u8BF7\u6C42\u53D1\u8D77\u524D\u4E8B\u4EF6\uFF0C\u4E0E<code>after</code>\u8BF7\u6C42\u54CD\u5E94\u540E\u4E8B\u4EF6\u3002</p><p>\u53EF\u901A\u8FC7\u63A5\u53E3\u7684\u6CE8\u89E3\u6765\u5B9A\u4E49\u6267\u884C\u7684\u4E8B\u4EF6\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * @Apidoc\\Title (&quot;\u8C03\u8BD5\u65F6\u4E8B\u4EF6&quot;)
 * @Apidoc\\Url(&quot;/admin/demo/debug&quot;)
 * @Apidoc\\Method(&quot;POST&quot;)
 * @Apidoc\\Param(&quot;username&quot;,type=&quot;string&quot;,desc=&quot;\u7528\u6237\u540D&quot;)
 * @Apidoc\\Param(&quot;password&quot;,type=&quot;string&quot;,desc=&quot;\u5BC6\u7801&quot;)
 * @Apidoc\\Before(event=&quot;setBody&quot;,key=&quot;password&quot;,handleValue=&quot;md5&quot;,value=&quot;body.password&quot;)
 * @Apidoc\\After(event=&quot;setGlobalHeader&quot;,key=&quot;Authorization&quot;,value=&quot;res.data.token&quot;,desc=&quot;\u7528\u6237\u767B\u5F55Toekn&quot;)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">debug</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u4F8B\u5B50\u4E2D\uFF0C\u4F1A\u6267\u884C\u4EE5\u4E0B\u4E8B\u4EF6\uFF1A</p><p>1\u3001\u8BF7\u6C42\u53D1\u8D77\u524D\uFF0C\u5C06\u8BF7\u6C42\u53C2\u6570<code>password</code>\u8FDB\u884Cmd5\u3002</p><p>2\u3001\u8BF7\u6C42\u54CD\u5E94\u540E\uFF0C\u8BBE\u7F6E\u4E00\u4E2A\u5168\u5C40\u8BF7\u6C42\u5934\u53C2\u6570<code>Authorization</code>\uFF0C\u53C2\u6570\u503C\u4E3A\u54CD\u5E94\u7ED3\u679C\u4E2D\u8FD4\u56DE\u6570\u636E\u4E2D\u7684<code>data.token</code>\u3002</p><h2 id="before-after\u6CE8\u89E3\u7684\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#before-after\u6CE8\u89E3\u7684\u53C2\u6570" aria-hidden="true">#</a> Before|After\u6CE8\u89E3\u7684\u53C2\u6570</h2><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>event</td><td>\u4E8B\u4EF6\u540D</td></tr><tr><td>key</td><td>\u5B57\u6BB5\u540D</td></tr><tr><td>value</td><td>\u5B57\u6BB5\u503C\uFF0C\u53EF\u76F4\u63A5\u8BBE\u7F6E\u503C\uFF0C\u6216\u4EE5<code>query.xxx</code>\u3001<code>body.xxx</code>\u53D6\u8BF7\u6C42\u53C2\u6570\u4E2D\u7684\u503C\uFF1B\u4EE5<code>res.xxx</code>\u53D6\u8BF7\u6C42\u54CD\u5E94\u7ED3\u679C\u4E2D\u7684\u53C2\u6570</td></tr><tr><td>desc</td><td>\u5B57\u6BB5\u63CF\u8FF0</td></tr><tr><td>url</td><td>event\u4E3Aajax\u65F6\uFF0C\u5B9A\u4E49\u8BF7\u6C42\u5730\u5740</td></tr><tr><td>method</td><td>event\u4E3Aajax\u65F6\uFF0C\u5B9A\u4E49\u8BF7\u6C42\u7C7B\u578B</td></tr><tr><td>contentType</td><td>event\u4E3Aajax\u65F6\uFF0C\u5B9A\u4E49contentType</td></tr></tbody></table><h2 id="\u4E8B\u4EF6\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u8BF4\u660E" aria-hidden="true">#</a> \u4E8B\u4EF6\u8BF4\u660E</h2><h3 id="setheader" tabindex="-1"><a class="header-anchor" href="#setheader" aria-hidden="true">#</a> setHeader</h3><blockquote><p><code>before</code>\u8BF7\u6C42\u53D1\u8D77\u524D\u6709\u6548</p></blockquote><p>\u8BBE\u7F6E\u4E00\u4E2A\u8BF7\u6C42\u5934\u53C2\u6570</p><p><code>@Apidoc\\Before(event=&quot;setHeader&quot;,key=&quot;\u53C2\u6570\u540D&quot;,value=&quot;\u53C2\u6570\u503C&quot;)</code></p><h3 id="setquery" tabindex="-1"><a class="header-anchor" href="#setquery" aria-hidden="true">#</a> setQuery</h3><blockquote><p><code>before</code>\u8BF7\u6C42\u53D1\u8D77\u524D\u6709\u6548</p></blockquote><p>\u8BBE\u7F6E\u4E00\u4E2A\u8BF7\u6C42Query\u53C2\u6570</p><p><code>@Apidoc\\Before(event=&quot;setQuery&quot;,key=&quot;\u53C2\u6570\u540D&quot;,value=&quot;\u53C2\u6570\u503C&quot;)</code></p><h3 id="setbody" tabindex="-1"><a class="header-anchor" href="#setbody" aria-hidden="true">#</a> setBody</h3><blockquote><p><code>before</code>\u8BF7\u6C42\u53D1\u8D77\u524D\u6709\u6548</p></blockquote><p>\u8BBE\u7F6E\u4E00\u4E2A\u8BF7\u6C42\u53C2\u6570</p><p><code>@Apidoc\\Before(event=&quot;setBody&quot;,key=&quot;\u53C2\u6570\u540D&quot;,value=&quot;\u53C2\u6570\u503C&quot;)</code></p><h3 id="clearheader" tabindex="-1"><a class="header-anchor" href="#clearheader" aria-hidden="true">#</a> clearHeader</h3><p>\u6E05\u9664\u4E00\u4E2A\u8BF7\u6C42\u5934\u53C2\u6570</p><p><code>@Apidoc\\Before(event=&quot;clearHeader&quot;,key=&quot;\u53C2\u6570\u540D&quot;)</code></p><h3 id="clearquery" tabindex="-1"><a class="header-anchor" href="#clearquery" aria-hidden="true">#</a> clearQuery</h3><p>\u6E05\u9664\u4E00\u4E2A\u8BF7\u6C42Query\u53C2\u6570</p><p><code>@Apidoc\\Before(event=&quot;clearQuery&quot;,key=&quot;\u53C2\u6570\u540D&quot;)</code></p><h3 id="clearbody" tabindex="-1"><a class="header-anchor" href="#clearbody" aria-hidden="true">#</a> clearBody</h3><p>\u6E05\u9664\u4E00\u4E2A\u8BF7\u6C42Body\u53C2\u6570</p><p><code>@Apidoc\\Before(event=&quot;clearBody&quot;,key=&quot;\u53C2\u6570\u540D&quot;)</code></p><h3 id="setglobalheader" tabindex="-1"><a class="header-anchor" href="#setglobalheader" aria-hidden="true">#</a> setGlobalHeader</h3><p>\u8BBE\u7F6E\u4E00\u4E2A\u5168\u5C40\u8BF7\u6C42\u5934\u53C2\u6570</p><p><code>@Apidoc\\After(event=&quot;setGlobalHeader&quot;,key=&quot;\u53C2\u6570\u540D&quot;,value=&quot;\u53C2\u6570\u503C&quot;,desc=&quot;\u53C2\u6570\u63CF\u8FF0&quot;)</code></p><h3 id="setglobalquery" tabindex="-1"><a class="header-anchor" href="#setglobalquery" aria-hidden="true">#</a> setGlobalQuery</h3><p>\u8BBE\u7F6E\u4E00\u4E2A\u5168\u5C40\u8BF7\u6C42Query\u53C2\u6570</p><p><code>@Apidoc\\After(event=&quot;setGlobalQuery&quot;,key=&quot;\u53C2\u6570\u540D&quot;,value=&quot;\u53C2\u6570\u503C&quot;,desc=&quot;\u53C2\u6570\u63CF\u8FF0&quot;)</code></p><h3 id="setglobalbody" tabindex="-1"><a class="header-anchor" href="#setglobalbody" aria-hidden="true">#</a> setGlobalBody</h3><p>\u8BBE\u7F6E\u4E00\u4E2A\u5168\u5C40\u8BF7\u6C42Body\u53C2\u6570</p><p><code>@Apidoc\\After(event=&quot;setGlobalBody&quot;,key=&quot;\u53C2\u6570\u540D&quot;,value=&quot;\u53C2\u6570\u503C&quot;,desc=&quot;\u53C2\u6570\u63CF\u8FF0&quot;)</code></p><h3 id="clearglobalheader" tabindex="-1"><a class="header-anchor" href="#clearglobalheader" aria-hidden="true">#</a> clearGlobalHeader</h3><p>\u6E05\u9664\u4E00\u4E2A\u5168\u5C40\u8BF7\u6C42\u5934\u53C2\u6570</p><p><code>@Apidoc\\Before(event=&quot;clearGlobalHeader&quot;,key=&quot;\u53C2\u6570\u540D&quot;)</code></p><h3 id="clearglobalquery" tabindex="-1"><a class="header-anchor" href="#clearglobalquery" aria-hidden="true">#</a> clearGlobalQuery</h3><p>\u6E05\u9664\u4E00\u4E2A\u5168\u5C40\u8BF7\u6C42Query\u53C2\u6570</p><p><code>@Apidoc\\Before(event=&quot;clearGlobalQuery&quot;,key=&quot;\u53C2\u6570\u540D&quot;)</code></p><h3 id="clearglobalbody" tabindex="-1"><a class="header-anchor" href="#clearglobalbody" aria-hidden="true">#</a> clearGlobalBody</h3><p>\u6E05\u9664\u4E00\u4E2A\u5168\u5C40\u8BF7\u6C42Body\u53C2\u6570</p><p><code>@Apidoc\\Before(event=&quot;clearGlobalBody&quot;,key=&quot;\u53C2\u6570\u540D&quot;)</code></p><h3 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> ajax</h3><p>\u53D1\u9001\u4E00\u4E2A\u8BF7\u6C42</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * @Apidoc\\Before(event=&quot;ajax&quot;,url=&quot;\u8BF7\u6C42\u5730\u5740&quot;,method=&quot;\u8BF7\u6C42\u7C7B\u578B&quot;,contentType=&quot;appicateion-json&quot;,
 *    @Apidoc\\Before(event=&quot;setBody&quot;,key=&quot;key&quot;,value=&quot;body.phone&quot;),
 *    @Apidoc\\Before(event=&quot;setBody&quot;,key=&quot;abc&quot;,value=&quot;123456&quot;),
 *    @Apidoc\\After(event=&quot;setHeader&quot;,key=&quot;X-CSRF-TOKEN&quot;,value=&quot;res.data.token&quot;)
 * )
 * /
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u6CE8\u89E3\uFF0C\u4F1A\u5728\u63A5\u53E3\u8C03\u8BD5\u524D\u53D1\u9001\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u53C2\u6570\u4E3A<code>{key:&quot;\u8FD9\u4E2A\u503C\u4E3A\u8C03\u8BD5\u63A5\u53E3\u53C2\u6570\u7684phone\u5B57\u6BB5&quot;,abc:&quot;123456&quot;}</code>\uFF0C\u8BF7\u6C42\u54CD\u5E94\u540E\u6267\u884C<code>setHeader</code>\u8BBE\u7F6E\u4E00\u4E2Akey\u4E3A<code>X-CSRF-TOKEN</code>\u7684\u8BF7\u6C42\u5934\u53C2\u6570\uFF0C\u503C\u4E3A\u8BE5\u8BF7\u6C42\u8FD4\u56DE\u503C\u4E2D\u7684<code>res.data.token</code></p>`,53),u=[r];function n(c,s){return o(),t("div",null,u)}const p=e(d,[["render",n],["__file","debugEvent.html.vue"]]);export{p as default};
