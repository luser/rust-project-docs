(function() {var implementors = {};
implementors["failure"] = [{"text":"impl AsRef&lt;dyn Fail + 'static&gt; for Error","synthetic":false,"types":[]}];
implementors["memmap"] = [{"text":"impl AsRef&lt;[u8]&gt; for Mmap","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for MmapMut","synthetic":false,"types":[]}];
implementors["quote"] = [{"text":"impl AsRef&lt;str&gt; for Tokens","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for Ident","synthetic":false,"types":[]}];
implementors["scroll"] = [{"text":"impl AsRef&lt;u64&gt; for Uleb128","synthetic":false,"types":[]},{"text":"impl AsRef&lt;i64&gt; for Sleb128","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl AsRef&lt;str&gt; for Ident","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()