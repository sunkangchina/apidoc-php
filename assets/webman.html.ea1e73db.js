import{D as c}from"./DownloadFe.d7e2b776.js";import{f as i,o as l,c as r,b as n,d as s,e as a,w as u,a as p,r as t,u as d}from"./app.7dcd0505.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";const m=n("h1",{id:"webman安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webman安装","aria-hidden":"true"},"#"),s(" Webman安装")],-1),v={class:"custom-container tip"},h=n("p",{class:"custom-container-title"},"在安装本插件时，确保你已成功安装Webman的项目并成功运行",-1),b={href:"https://www.workerman.net/doc/webman/install.html",target:"_blank",rel:"noopener noreferrer"},g=p(`<h2 id="_1、安装插件" tabindex="-1"><a class="header-anchor" href="#_1、安装插件" aria-hidden="true">#</a> 1、安装插件</h2><p>进入项目根目录，执行如下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer require hg/apidoc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">根据项目结构调整apps配置</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// /config/plugin/hg/apidoc/app.php</span>
<span class="token string single-quoted-string">&#39;apps&#39;</span>           <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;Api接口&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// （注意）核对配置文件中此目录是否正确</span>
        <span class="token string single-quoted-string">&#39;path&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;app\\controller&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;key&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;api&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="_2、添加前端页面" tabindex="-1"><a class="header-anchor" href="#_2、添加前端页面" aria-hidden="true">#</a> 2、添加前端页面</h2>`,5),_=n("p",null,"下载完成后解压，将apidoc文件夹拷贝到你的项目 public 目录下",-1),f={href:"http://xn--6qqv7i2xdt95b/apidoc/index.html",target:"_blank",rel:"noopener noreferrer"},x=n("h2",{id:"配置异常响应",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置异常响应","aria-hidden":"true"},"#"),s(" 配置异常响应")],-1),w=n("p",null,"由于框架会对全局异常进行处理，如apidoc的异常未被正确响应，会导致页面打不开或报错，配置以下异常处理来解决问题。",-1),q={href:"https://www.workerman.net/doc/webman/exception.html",target:"_blank",rel:"noopener noreferrer"},y=p(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 找到你的项目所配置的异常处理类，本示例为</span>
<span class="token comment">// support/ExceptionHandle.php</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">render</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">Throwable</span> <span class="token variable">$exception</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Response</span>
<span class="token punctuation">{</span>
    <span class="token comment">// Apidoc异常处理响应</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$exception</span> <span class="token keyword">instanceof</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>hg<span class="token punctuation">\\</span>apidoc<span class="token punctuation">\\</span>exception<span class="token punctuation">\\</span>HttpException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string double-quoted-string">&quot;code&quot;</span> <span class="token operator">=&gt;</span> <span class="token variable">$exception</span><span class="token operator">-&gt;</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;message&quot;</span> <span class="token operator">=&gt;</span> <span class="token variable">$exception</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token constant">JSON_UNESCAPED_UNICODE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">$exception</span><span class="token operator">-&gt;</span><span class="token function">getStatusCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token variable">$exception</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),C=i({__name:"webman.html",setup(E){return($,N)=>{const e=t("ExternalLinkIcon"),o=t("ClientOnly");return l(),r("div",null,[m,n("div",v,[h,n("p",null,[s("安装方法参考："),n("a",b,[s("Webman安装文档"),a(e)])])]),g,a(o,null,{default:u(()=>[a(d(c))]),_:1}),_,n("p",null,[s("打开浏览器访问 "),n("a",f,[s("http://你的域名/apidoc/index.html"),a(e)]),s(" ，出现接口文档页面，表示安装成功。")]),x,w,n("blockquote",null,[n("p",null,[s("参考"),n("a",q,[s("Webman官方文档"),a(e)]),s("找到你项目的异常处理类，或创建异常处理类")])]),y])}}}),V=k(C,[["__file","webman.html.vue"]]);export{V as default};