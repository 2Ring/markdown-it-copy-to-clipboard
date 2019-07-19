const wrap = (render) => (...args) => {
    return render.apply(this, args)
        .replace('</pre>', '<div class="copyToClipboard"><i class="far fa-clipboard"></i><span>Copy</span></div></pre>')
}

const copy = (md) => {
    md.renderer.rules.code_block = wrap(md.renderer.rules.code_block);
    md.renderer.rules.fence = wrap(md.renderer.rules.fence)
};

module.exports = copy;