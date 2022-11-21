import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as a,a as s}from"./app.a8b7aa18.js";const i={},p=s(`<h1 id="没有apidoc-php配置文件" tabindex="-1"><a class="header-anchor" href="#没有apidoc-php配置文件" aria-hidden="true">#</a> 没有apidoc.php配置文件</h1><h2 id="tp5-1" tabindex="-1"><a class="header-anchor" href="#tp5-1" aria-hidden="true">#</a> TP5.1</h2><p>TP5.1框架，安装Apidoc时可能无法自动生成配置文件，需手动添加配置文件</p><p>手动将 <code>/vendor/hg/apidoc/src/config.php</code> 拷贝到<code>/config/</code>目录下，并重命名为<code>apidoc.php</code></p><h2 id="tp6" tabindex="-1"><a class="header-anchor" href="#tp6" aria-hidden="true">#</a> TP6</h2><p>使用<code>composer2</code>且<code>topthink/framework</code>版本小于 V6.0.6，安装Apidoc时可能会出现无法自动生成配置文件，需手动添加配置文件</p><p>手动将 <code>/vendor/hg/apidoc/src/config.php</code> 拷贝到<code>/config/</code>目录下，并重命名为<code>apidoc.php</code></p><h2 id="laravel" tabindex="-1"><a class="header-anchor" href="#laravel" aria-hidden="true">#</a> Laravel</h2><p>项目根目录下执行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan vendor:publish --provider=&quot;hg\\apidoc\\providers\\LaravelService&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="hyperf" tabindex="-1"><a class="header-anchor" href="#hyperf" aria-hidden="true">#</a> Hyperf</h2><p>项目根目录下执行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php bin/hyperf.php vendor:publish hg\\apidoc\\providers\\HyperfService
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="其它框架" tabindex="-1"><a class="header-anchor" href="#其它框架" aria-hidden="true">#</a> 其它框架</h2><p>手动将 <code>/vendor/hg/apidoc/src/config.php</code> 拷贝到框架规范的配置目录下，并根据框架规范修改配置文件命名/结构，如下以Webman为例：</p><p>在 <code>config/plugin</code>目录下创建 <code>hg/apidoc/</code>目录，并在该目录下创建<code>app.php</code>文件，创建后目录结构如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|- config
   |- plugin
     |-hg
       |-apidoc
         |- app.php
         |- route.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>// app.php
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;enable&#39;</span>  <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;apidoc&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token comment">// 文档标题</span>
        <span class="token string single-quoted-string">&#39;title&#39;</span>              <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;API接口文档&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置可选版本</span>
        <span class="token string single-quoted-string">&#39;apps&#39;</span>           <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token comment">//...</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">//...</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),d=[p];function c(o,t){return e(),a("div",null,d)}const u=n(i,[["render",c],["__file","notConfig.html.vue"]]);export{u as default};
