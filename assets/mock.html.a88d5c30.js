import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,a as e}from"./app.a8b7aa18.js";const i={},t=e(`<h1 id="mock调试数据" tabindex="-1"><a class="header-anchor" href="#mock调试数据" aria-hidden="true">#</a> Mock调试数据</h1><p>在接口调试时，往往需要填写大量的测试数据来进行请求测试；</p><p>有了Mock数据的功能，在调试时，自动根据规则生成调试数据，接口调试更高效。</p><h2 id="注解方式" tabindex="-1"><a class="header-anchor" href="#注解方式" aria-hidden="true">#</a> 注解方式</h2><p>只需要在接口注解的<code>Query</code>、<code>Param</code>中加入<code>mock</code>的配置即可</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * mock调试数据
 * @Apidoc\\Url(&quot;/admin/baseDemo/mock&quot;)
 * @Apidoc\\Method(&quot;POST&quot;)
 * @Apidoc\\Param(&quot;number&quot;,type=&quot;int&quot;,mock=&quot;@integer(10, 100)&quot;)
 * @Apidoc\\Param(&quot;boolean&quot;,type=&quot;boolean&quot;,mock=&quot;@boolean&quot;)
 * @Apidoc\\Param(&quot;date&quot;,type=&quot;date&quot;,mock=&quot;@date&quot;)
 * @Apidoc\\Param(&quot;time&quot;,type=&quot;time&quot;,mock=&quot;@time(&#39;H:m&#39;)&quot;)
 * @Apidoc\\Param(&quot;time&quot;,type=&quot;datetime&quot;,mock=&quot;@datetime(&#39;yyyy-MM-dd HH:mm:ss&#39;)&quot;)
 * @Apidoc\\Param(&quot;string&quot;,type=&quot;string&quot;,mock=&quot;@string&quot;)
 * @Apidoc\\Param(&quot;name&quot;,type=&quot;string&quot;,mock=&quot;@cname&quot;)
 * @Apidoc\\Param(&quot;text&quot;,type=&quot;string&quot;,mock=&quot;@cparagraph&quot;)
 * @Apidoc\\Param(&quot;image&quot;,type=&quot;string&quot;,mock=&quot;@image(&#39;200x100&#39;)&quot;)
 * @Apidoc\\Param(&quot;color&quot;,type=&quot;string&quot;,mock=&quot;@color&quot;)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">mock</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据表字段mock" tabindex="-1"><a class="header-anchor" href="#数据表字段mock" aria-hidden="true">#</a> 数据表字段Mock</h2><p>当我们希望ref引用数据表的字段，也能配置字段的mock规则，只需要在字段注释中加入<code>mock(xxx)</code>即可，如下：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">CREATE</span> <span class="token constant">TABLE</span> <span class="token string backtick-quoted-string">\`user\`</span> <span class="token punctuation">(</span>↵  
  <span class="token string backtick-quoted-string">\`id\`</span> <span class="token keyword type-declaration">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span> <span class="token constant">AUTO_INCREMENT</span> <span class="token constant">COMMENT</span> <span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span>
  <span class="token string backtick-quoted-string">\`name\`</span> <span class="token function">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span> <span class="token constant">COMMENT</span> <span class="token string single-quoted-string">&#39;姓名，mock(@cname)&#39;</span><span class="token punctuation">,</span>
  <span class="token string backtick-quoted-string">\`age\`</span> <span class="token function">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token constant">NULL</span> <span class="token constant">COMMENT</span> <span class="token string single-quoted-string">&#39;年龄，mock(@integer(1, 150))&#39;</span><span class="token punctuation">,</span>
<span class="token constant">PRIMARY</span> <span class="token function">KEY</span> <span class="token punctuation">(</span><span class="token string backtick-quoted-string">\`id\`</span><span class="token punctuation">)</span>↵<span class="token punctuation">)</span> <span class="token constant">ENGINE</span><span class="token operator">=</span>MyISAM <span class="token constant">AUTO_INCREMENT</span><span class="token operator">=</span><span class="token number">23</span> <span class="token keyword">DEFAULT</span> <span class="token constant">CHARSET</span><span class="token operator">=</span>utf8&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Mock规则</p><p>以下为内置规则，自定义规则请查看<a href="">自定义mock规则</a></p></div><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><h3 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> @boolean</h3><p>随机获得一个boolean值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@boolean
<span class="token comment">// true</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="natural" tabindex="-1"><a class="header-anchor" href="#natural" aria-hidden="true">#</a> @natural</h3><p>随机获得一个自然数，可指定范围<code>@natural(min, max)</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@natural
<span class="token comment">// 8137814963804528</span>

@<span class="token function">natural</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>
<span class="token comment">// 7797466542198811</span>

@<span class="token function">natural</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token comment">// 93</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="integer" tabindex="-1"><a class="header-anchor" href="#integer" aria-hidden="true">#</a> @integer</h3><p>随机获得一个整数，可指定范围<code>@integer(min, max)</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@integer
<span class="token comment">// 2994973617286844</span>

@<span class="token function">integer</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>
<span class="token comment">// 2405323822479268</span>

@<span class="token function">integer</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token comment">// 80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="float" tabindex="-1"><a class="header-anchor" href="#float" aria-hidden="true">#</a> @float</h3><p>随机获得一个浮点数，可指定范围<code>@float(min, max, dmin, dmax)</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@float
<span class="token comment">// 7259904392499748</span>

@<span class="token function">float</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// 8638086838442049</span>

@<span class="token function">float</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token comment">// 87.08081</span>

@<span class="token function">float</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// 83.6886314</span>

@<span class="token function">float</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// 69.4772</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="character" tabindex="-1"><a class="header-anchor" href="#character" aria-hidden="true">#</a> @character</h3><p>随机获得一个字符，可指定<code>@character(&#39;lower/upper/number/symbol&#39;)</code></p><ul><li>lower：小写字母</li><li>upper：大写字母</li><li>number：数字</li><li>symbol：符号</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@character
<span class="token comment">// &quot;m&quot;</span>

@<span class="token function">character</span><span class="token punctuation">(</span><span class="token string">&quot;lower&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;j&quot;</span>

@<span class="token function">character</span><span class="token punctuation">(</span><span class="token string">&quot;upper&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;F&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> @string</h3><p>随机获得一个字符串</p><ul><li>指定长度：<code>@string(length)</code></li><li>指定长度范围：<code>@string(min, max)</code></li><li>指定类型与长度：<code>@string(&#39;lower/upper/number/symbol&#39;, length)</code></li><li>指定类型与长度范围：<code>@string(&#39;lower/upper/number/symbol&#39;, min, max)</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@string 
<span class="token comment">// &quot;PN@ty&quot;</span>

@<span class="token function">string</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;#bZSZ&quot;</span>

@<span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;lower&quot;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;ryhyx&quot;</span>
@<span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;upper&quot;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;MCCMQ&quot;</span>

@<span class="token function">string</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;nyBH2rx#R&quot;</span>

@<span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;lower&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;nwo&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="range" tabindex="-1"><a class="header-anchor" href="#range" aria-hidden="true">#</a> @range</h3><p>随机获得一个范围的数组</p><ul><li>指定结束的值：<code>@range(stop)</code></li><li>指定开始、结束的值：<code>@range(start, stop)</code></li><li>指定开始、结束、步长：<code>@range(start, stop, step)</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@<span class="token function">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>  
<span class="token comment">// [0,1,2,3,4,5,6,7,8,9]</span>

@<span class="token function">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
<span class="token comment">// [3,4,5,6]</span>

@<span class="token function">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// [1,3,5,7,9]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="日期时间" tabindex="-1"><a class="header-anchor" href="#日期时间" aria-hidden="true">#</a> 日期时间</h2><h3 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> @date</h3><p>随机获得一个日期</p><ul><li>指定格式：<code>@date(format)</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@date
<span class="token comment">// 2013-06-13</span>

@<span class="token function">date</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 1999-06-21</span>

@<span class="token function">date</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy/MM/dd&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 1983/01/25</span>

@<span class="token function">date</span><span class="token punctuation">(</span><span class="token string">&quot;yy-MM-dd&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 98-08-03</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> @time</h3><p>随机获得一个时间</p><ul><li>指定格式：<code>@time(format)</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@time
<span class="token comment">// 12:02:49</span>

@<span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&quot;A HH:mm:ss&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// AM 04:57:02</span>

@<span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&quot;a HH:mm:ss&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// pm 15:40:04</span>

@<span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&quot;HH:mm:ss&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 09:35:22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="datetime" tabindex="-1"><a class="header-anchor" href="#datetime" aria-hidden="true">#</a> @datetime</h3><p>随机获得一个时间</p><ul><li>指定格式：<code>@datetime(format)</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@datetime
<span class="token comment">// 2010-01-13 23:59:05</span>

@<span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&quot;A HH:mm:ss&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// AM 04:57:02</span>

@<span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&quot;a HH:mm:ss&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// pm 15:40:04</span>

@<span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&quot;HH:mm:ss&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 09:35:22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="now" tabindex="-1"><a class="header-anchor" href="#now" aria-hidden="true">#</a> @now</h3><p>随机获得一个以当前为基础的日期时间</p><ul><li>指定单位：<code>@now(&#39;year/month/week/day/hour/minute/second&#39;)</code></li><li>指定格式：<code>@now(format)</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@now
<span class="token comment">// 2021-08-03 10:38:52</span>

@<span class="token function">now</span><span class="token punctuation">(</span><span class="token string">&quot;year&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 2021-01-02 00:00:00</span>

@<span class="token function">now</span><span class="token punctuation">(</span><span class="token string">&quot;month&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 2021-08-02 00:00:00</span>

@<span class="token function">now</span><span class="token punctuation">(</span><span class="token string">&quot;week&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 2021-08-03 00:00:00</span>

@<span class="token function">now</span><span class="token punctuation">(</span><span class="token string">&quot;day&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 2021-08-03 00:00:00</span>

@<span class="token function">now</span><span class="token punctuation">(</span><span class="token string">&quot;hour&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 2021-08-03 10:00:00</span>

@<span class="token function">now</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss SS&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 2021-08-03 10:38:52 148</span>

@<span class="token function">now</span><span class="token punctuation">(</span><span class="token string">&#39;day&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy-MM-dd HH:mm:ss SS&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 2021-08-12 00:00:00 000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h2><h3 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> @image</h3><p>随机获得一个图片地址</p><ul><li>指定内容 <code>@image(size, background, foreground, format, text)</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@image
<span class="token comment">// https://dummyimage.com/200x200</span>

@<span class="token function">image</span><span class="token punctuation">(</span><span class="token string">&#39;200x100&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// https://dummyimage.com/200x100</span>

@<span class="token function">image</span><span class="token punctuation">(</span><span class="token string">&#39;200x100&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#FF6600&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// https://dummyimage.com/200x100/FF6600</span>

@<span class="token function">image</span><span class="token punctuation">(</span><span class="token string">&#39;200x100&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#4A7BF7&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// https://dummyimage.com/200x100/4A7BF7&amp;text=Hello</span>

@<span class="token function">image</span><span class="token punctuation">(</span><span class="token string">&#39;200x100&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#50B347&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#FFF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Apidoc&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// https://dummyimage.com/200x100/50B347/FFF&amp;text=Apidoc</span>

@<span class="token function">image</span><span class="token punctuation">(</span><span class="token string">&#39;200x100&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#894FC4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#FFF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;png&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;!&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// https://dummyimage.com/200x100/894FC4/FFF.png&amp;text=!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dataimage" tabindex="-1"><a class="header-anchor" href="#dataimage" aria-hidden="true">#</a> @dataImage</h3><p>随机获得一个base64图片</p><ul><li>指定内容 <code>@dataImage(size, text)</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@dataImage
<span class="token comment">// data:image/png;base64, .....</span>

@<span class="token function">dataImage</span><span class="token punctuation">(</span><span class="token string">&#39;200x100&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// data:image/png;base64, .....</span>

@<span class="token function">dataImage</span><span class="token punctuation">(</span><span class="token string">&#39;200x100&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hello Apidoc!&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// data:image/png;base64, .....</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色" aria-hidden="true">#</a> 颜色</h2><h3 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> @color</h3><p>随机获得一个颜色值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@color
<span class="token comment">// #79f2b4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hex" tabindex="-1"><a class="header-anchor" href="#hex" aria-hidden="true">#</a> @hex</h3><p>随机获得一个hex格式的颜色值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@hex
<span class="token comment">// #f279ca</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rgb" tabindex="-1"><a class="header-anchor" href="#rgb" aria-hidden="true">#</a> @rgb</h3><p>随机获得一个rgb格式的颜色值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@rgb
<span class="token comment">// rgb(242, 211, 121)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rgba" tabindex="-1"><a class="header-anchor" href="#rgba" aria-hidden="true">#</a> @rgba</h3><p>随机获得一个rgba格式的颜色值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@rgba
<span class="token comment">// rgba(242, 211, 121, 0.26)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hsl" tabindex="-1"><a class="header-anchor" href="#hsl" aria-hidden="true">#</a> @hsl</h3><p>随机获得一个hsl格式的颜色值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@hsl
<span class="token comment">// hsl(299, 82, 71)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文本" tabindex="-1"><a class="header-anchor" href="#文本" aria-hidden="true">#</a> 文本</h2><h3 id="paragraph" tabindex="-1"><a class="header-anchor" href="#paragraph" aria-hidden="true">#</a> @paragraph</h3><p>随机获得一段文本</p><ul><li>指定长度 <code>@paragraph(length)</code></li><li>指定长度范围 <code>@paragraph(min, max)</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@paragraph
<span class="token comment">// &quot;Cmealuulh egeilrl wluugtmeg lcnyripd ulqjency etjwsrtck etpqh cytx mmxuvpn xgltiwn gtlswx pejpey swwbx. Otmggk qwib bjbn xqqbzljhem ogvxyf xzcti ekacgtnwp gfdlnftsz nnop yeqqgro yqhm ofcy nydy cdrpyvj lubjkyeo. Jqmuw chcwnq lenof ebiybquma twvbnsnl grg djurcqmwx ufow hlliuo tenom zevg iuqobks bwkkxh pyhucl ingnlebgz jtodh.&quot;</span>

@<span class="token function">paragraph</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;Seh tki ycusfroo jzudml yordvd zekp mugpcmm ranej scdyrw gvfuvjpf xgyrmit bfgmjxvju okonu cxfelx tnfmmjt unddrhbbtg wjrkeu. Lwtm rhuh zquqdx vgbxbmu rem cganfovr xcecvzwuf fbsukl tblwib axtavkx kxdn ljws jihbcxino pxtgoq iedlp snhq.&quot;</span>

@<span class="token function">paragraph</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;Khrquxgdv viabvdx yuzlshy rpeoeh xxqgye lclfasktcl dogp jeiii kyxyxvbb esrv esxa uljsshg. Yhp ejfhlun nce xua keakdu llrqxoq ewnyvcyl ecoinwq iifnejlgme wbkwdhec foxdulztyj fqups zfdlqva ptppkz.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sentence" tabindex="-1"><a class="header-anchor" href="#sentence" aria-hidden="true">#</a> @sentence</h3><p>随机获得一个句子</p><ul><li>指定长度 <code>@paragraph(length)</code></li><li>指定长度范围 <code>@paragraph(min, max)</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@sentence
<span class="token comment">// &quot;Yfdpvct ywneoog tulwe senlh avslxwj ffxjpfeebh knypcz mjpx ucmgqplrb jekmtop qzgsm csqnjg txmxu zmhegfz pwrsmqccs jkhpt.&quot;</span>

@<span class="token function">sentence</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;Hmayhzx ivrk jxbej vvfmcnuuq zjqdjp.&quot;</span>

@<span class="token function">sentence</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;Indo rebn ocon ycwpgj.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="word" tabindex="-1"><a class="header-anchor" href="#word" aria-hidden="true">#</a> @word</h3><p>随机获得一个文本</p><ul><li>指定长度 <code>@word(length)</code></li><li>指定长度范围 <code>@word(min, max)</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@word
<span class="token comment">// &quot;bggnypex&quot;</span>

@<span class="token function">word</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;fhvqg&quot;</span>

@<span class="token function">word</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;xqdy&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> @title</h3><p>随机获得一个标题</p><ul><li>指定长度 <code>@title(length)</code></li><li>指定长度范围 <code>@title(min, max)</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@title
<span class="token comment">// &quot;Xbiz Wpkfirxrc Iekbn Hzreio Vksv Mrixhk Krwnf&quot;</span>

@<span class="token function">title</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;Luzbtjlr Ochd Mibotdsmri Dcpcr Mthbz&quot;</span>

@<span class="token function">title</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;Vtqw Jct Loasetdthg Cghvwuk&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cparagraph" tabindex="-1"><a class="header-anchor" href="#cparagraph" aria-hidden="true">#</a> @cparagraph</h3><p>随机获得一段中文文本</p><ul><li>指定长度 <code>@cparagraph(length)</code></li><li>指定长度范围 <code>@cparagraph(min, max)</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@cparagraph
<span class="token comment">// &quot;林律平织代结自术党要真成局。越斯低知称代中区细北表关品断。在增看无片长百活已团布接青争两究西。北打酸心铁相克根八经如再装前角由。容根算打少养严江制社器为我认。无验四口但做西今位制党装用。动也精子照把质被已大才七下想部。&quot;</span>

@<span class="token function">cparagraph</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;么办给基率自细程强队社经这千。少立应常须开广情较计体命子动被。&quot;</span>

@<span class="token function">cparagraph</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;料难导利极些性通业照周亲员包思认铁。团学细化从查新做来者民细。&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="csentence" tabindex="-1"><a class="header-anchor" href="#csentence" aria-hidden="true">#</a> @csentence</h3><p>随机获得一句中文文本</p><ul><li>指定长度 <code>@csentence(length)</code></li><li>指定长度范围 <code>@csentence(min, max)</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@csentence
<span class="token comment">// &quot;约二证年专话采识路验回已难平管解习。&quot;</span>

@<span class="token function">csentence</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;见九思达识。&quot;</span>

@<span class="token function">csentence</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;转米变。&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cword" tabindex="-1"><a class="header-anchor" href="#cword" aria-hidden="true">#</a> @cword</h3><p>随机获得一个中文文本</p><ul><li>指定随机字符 <code>@cword(pool)</code></li><li>指定长度 <code>@cword(length)</code></li><li>指定随机字符、长度 <code>@cword(pool,length)</code></li><li>指定长度范围 <code>@cword(min, max)</code></li><li>指定随机字符、长度范围 <code>@cword(pool, min, max)</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@cword
<span class="token comment">// &quot;合&quot;</span>

@<span class="token function">cword</span><span class="token punctuation">(</span><span class="token string">&#39;零一二三四五六七八九十&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;三&quot;</span>

@<span class="token function">cword</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;拉等示&quot;</span>

@<span class="token function">cword</span><span class="token punctuation">(</span><span class="token string">&quot;零一二三四五六七八九十&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;五六十&quot;</span>

@<span class="token function">cword</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;青圆统&quot;</span>

@<span class="token function">cword</span><span class="token punctuation">(</span><span class="token string">&quot;零一二三四五六七八九十&quot;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;一三四零二一&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ctitle" tabindex="-1"><a class="header-anchor" href="#ctitle" aria-hidden="true">#</a> @ctitle</h3><p>随机获得一个中文标题</p><ul><li>指定长度 <code>@ctitle(length)</code></li><li>指定长度范围 <code>@ctitle(min, max)</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@ctitle
<span class="token comment">// &quot;图部称难直记&quot;</span>

@<span class="token function">ctitle</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;光派要何给&quot;</span>

@<span class="token function">ctitle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;圆带火带&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="姓名" tabindex="-1"><a class="header-anchor" href="#姓名" aria-hidden="true">#</a> 姓名</h2><h3 id="first" tabindex="-1"><a class="header-anchor" href="#first" aria-hidden="true">#</a> @first</h3><p>随机获得一个姓</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@first
<span class="token comment">// &quot;Laura&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="last" tabindex="-1"><a class="header-anchor" href="#last" aria-hidden="true">#</a> @last</h3><p>随机获得一个名</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@last
<span class="token comment">// &quot;White&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> @name</h3><p>随机获得一个姓名</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@name
<span class="token comment">// &quot;James Thompson&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cfirst" tabindex="-1"><a class="header-anchor" href="#cfirst" aria-hidden="true">#</a> @cfirst</h3><p>随机获得一个中文姓</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@cfirst
<span class="token comment">// &quot;张&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clast" tabindex="-1"><a class="header-anchor" href="#clast" aria-hidden="true">#</a> @clast</h3><p>随机获得一个中文名</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@clast
<span class="token comment">// &quot;航&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cname" tabindex="-1"><a class="header-anchor" href="#cname" aria-hidden="true">#</a> @cname</h3><p>随机获得一个中文姓名</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@cname
<span class="token comment">// &quot;杜芳&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h2><h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> @url</h3><p>随机获得一个url地址</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@url
<span class="token comment">// &quot;http://atdcptravt.tc/wlrsdlbkwl&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="domain" tabindex="-1"><a class="header-anchor" href="#domain" aria-hidden="true">#</a> @domain</h3><p>随机获得一个域名</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@domain
<span class="token comment">// &quot;suix.cn&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="protocol" tabindex="-1"><a class="header-anchor" href="#protocol" aria-hidden="true">#</a> @protocol</h3><p>随机获得一个协议名</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@protocol
<span class="token comment">// &quot;gopher&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="email" tabindex="-1"><a class="header-anchor" href="#email" aria-hidden="true">#</a> @email</h3><p>随机获得一个Email</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@email
<span class="token comment">// &quot;p.jldur@hgvxebirz.ca&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ip" tabindex="-1"><a class="header-anchor" href="#ip" aria-hidden="true">#</a> @ip</h3><p>随机获得一个ip地址</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@ip
<span class="token comment">// &quot;157.234.240.60&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="地址" tabindex="-1"><a class="header-anchor" href="#地址" aria-hidden="true">#</a> 地址</h2><h3 id="region" tabindex="-1"><a class="header-anchor" href="#region" aria-hidden="true">#</a> @region</h3><p>随机获得一个地区</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@region
<span class="token comment">// &quot;华东&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="province" tabindex="-1"><a class="header-anchor" href="#province" aria-hidden="true">#</a> @province</h3><p>随机获得一个省份</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@province
<span class="token comment">// &quot;天津&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="city" tabindex="-1"><a class="header-anchor" href="#city" aria-hidden="true">#</a> @city</h3><p>随机获得一个城市</p><ul><li>是否包含省份 <code>@city(prefix)</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@city
<span class="token comment">// &quot;晋中市&quot;</span>

@<span class="token function">city</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">// 吉林省 松原市</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="county" tabindex="-1"><a class="header-anchor" href="#county" aria-hidden="true">#</a> @county</h3><p>随机获得一个县/区</p><ul><li>是否包含省份、城市 <code>@county(prefix)</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@county
<span class="token comment">// &quot;芦山县&quot;</span>

@<span class="token function">county</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;湖南省 株洲市 攸县&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zip" tabindex="-1"><a class="header-anchor" href="#zip" aria-hidden="true">#</a> @zip</h3><p>随机获得一个邮编</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@zip
<span class="token comment">// &quot;151840&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zip-1" tabindex="-1"><a class="header-anchor" href="#zip-1" aria-hidden="true">#</a> @zip</h3><p>随机获得一个邮编</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@zip
<span class="token comment">// &quot;151840&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h2><h3 id="pick" tabindex="-1"><a class="header-anchor" href="#pick" aria-hidden="true">#</a> @pick</h3><p>指定数组中随机抽取一个值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@<span class="token function">pick</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;i&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;o&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;u&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;o&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shuffle" tabindex="-1"><a class="header-anchor" href="#shuffle" aria-hidden="true">#</a> @shuffle</h3><p>重组数组中值的位置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@<span class="token function">pick</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;i&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;o&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;u&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// [&quot;u&quot;,&quot;i&quot;,&quot;o&quot;,&quot;a&quot;,&quot;e&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="guid" tabindex="-1"><a class="header-anchor" href="#guid" aria-hidden="true">#</a> @guid</h3><p>获得一个guid字符串</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@guid
<span class="token comment">// &quot;D8AA2eAf-DcaD-749c-efAB-de4c826cD6FD&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> @id</h3><p>获得一个id</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@id
<span class="token comment">// &quot;350000201612198267&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="phone" tabindex="-1"><a class="header-anchor" href="#phone" aria-hidden="true">#</a> @phone</h3><p>随机获得一个11位手机号</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@phone
<span class="token comment">// &quot;13100667890&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="idcard" tabindex="-1"><a class="header-anchor" href="#idcard" aria-hidden="true">#</a> @idcard</h3><p>随机获得一个18位身份证号码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@idcard
<span class="token comment">// &quot;450311198810100505&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="regexp" tabindex="-1"><a class="header-anchor" href="#regexp" aria-hidden="true">#</a> @regexp</h3><p>指定长度 <code>@paragraph(reg, leng)</code></p><p>根据正则生成数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@<span class="token function">regexp</span><span class="token punctuation">(</span><span class="token string">&#39;/\\[a-z]{5,10}\\-/&#39;</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;feyoiga-eqiig-pbyriaj-&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义mock规则" tabindex="-1"><a class="header-anchor" href="#自定义mock规则" aria-hidden="true">#</a> 自定义mock规则</h2><p>如果以上内置规则无法满足，你可以通过配置文件自定义规则来实现</p><p>1、<code>config.js</code>配置文件中加入自定义规则，如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>apidocFeConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
   <span class="token constant">MOCK_EXTENDS</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">abc</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">abc-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、注解中直接使用</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>
<span class="token doc-comment comment">/**
 * mock调试数据
 * ...
 * @Apidoc\\Param(&quot;abc&quot;,type=&quot;string&quot;,mock=&quot;@abc(&#39;666&#39;)&quot;)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,195),c=[t];function l(p,o){return a(),s("div",null,c)}const r=n(i,[["render",l],["__file","mock.html.vue"]]);export{r as default};
