(function() {var implementors = {};
implementors["minidump_common"] = [{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for MINIDUMP_HEADER <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MINIDUMP_HEADER: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for MINIDUMP_LOCATION_DESCRIPTOR <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MINIDUMP_LOCATION_DESCRIPTOR: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for MINIDUMP_MEMORY_DESCRIPTOR <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MINIDUMP_MEMORY_DESCRIPTOR: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for MINIDUMP_DIRECTORY <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MINIDUMP_DIRECTORY: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for MINIDUMP_MODULE <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MINIDUMP_MODULE: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for VS_FIXEDFILEINFO <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;VS_FIXEDFILEINFO: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for CV_INFO_PDB20","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for CV_INFO_PDB70","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for GUID <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;GUID: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for CV_INFO_ELF","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for IMAGE_DEBUG_MISC <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;IMAGE_DEBUG_MISC: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for MINIDUMP_THREAD <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MINIDUMP_THREAD: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for MINIDUMP_EXCEPTION_STREAM <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MINIDUMP_EXCEPTION_STREAM: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for MINIDUMP_EXCEPTION <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MINIDUMP_EXCEPTION: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for XMM_SAVE_AREA32 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;XMM_SAVE_AREA32: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for SSE_REGISTERS <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SSE_REGISTERS: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for CONTEXT_AMD64 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CONTEXT_AMD64: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for FLOATING_SAVE_AREA_ARM <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;FLOATING_SAVE_AREA_ARM: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for CONTEXT_ARM <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CONTEXT_ARM: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for FLOATING_SAVE_AREA_ARM64_OLD <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;FLOATING_SAVE_AREA_ARM64_OLD: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for CONTEXT_ARM64_OLD <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CONTEXT_ARM64_OLD: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for FLOATING_SAVE_AREA_ARM64 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;FLOATING_SAVE_AREA_ARM64: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for CONTEXT_ARM64 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CONTEXT_ARM64: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for FLOATING_SAVE_AREA_MIPS <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;FLOATING_SAVE_AREA_MIPS: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for CONTEXT_MIPS <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CONTEXT_MIPS: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for FLOATING_SAVE_AREA_PPC <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;FLOATING_SAVE_AREA_PPC: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for VECTOR_SAVE_AREA_PPC <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;VECTOR_SAVE_AREA_PPC: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for CONTEXT_PPC <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CONTEXT_PPC: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for CONTEXT_PPC64 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CONTEXT_PPC64: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for FLOATING_SAVE_AREA_SPARC <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;FLOATING_SAVE_AREA_SPARC: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for CONTEXT_SPARC <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CONTEXT_SPARC: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for FLOATING_SAVE_AREA_X86 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;FLOATING_SAVE_AREA_X86: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for CONTEXT_X86 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CONTEXT_X86: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for CPU_INFORMATION <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CPU_INFORMATION: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for X86CpuInfo <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X86CpuInfo: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for ARMCpuInfo <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ARMCpuInfo: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for OtherCpuInfo <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;OtherCpuInfo: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for MINIDUMP_SYSTEM_INFO <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MINIDUMP_SYSTEM_INFO: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for SYSTEMTIME <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SYSTEMTIME: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for TIME_ZONE_INFORMATION <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TIME_ZONE_INFORMATION: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for MINIDUMP_MISC_INFO <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MINIDUMP_MISC_INFO: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for MINIDUMP_MISC_INFO2 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MINIDUMP_MISC_INFO2: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for MINIDUMP_MISC_INFO3 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MINIDUMP_MISC_INFO3: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for MINIDUMP_MISC_INFO4 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MINIDUMP_MISC_INFO4: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for MINIDUMP_MEMORY_INFO_LIST <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MINIDUMP_MEMORY_INFO_LIST: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for MINIDUMP_MEMORY_INFO <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MINIDUMP_MEMORY_INFO: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for MINIDUMP_BREAKPAD_INFO <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MINIDUMP_BREAKPAD_INFO: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for MINIDUMP_ASSERTION_INFO <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MINIDUMP_ASSERTION_INFO: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for LINK_MAP_32 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;LINK_MAP_32: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for DSO_DEBUG_32 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DSO_DEBUG_32: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for LINK_MAP_64 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;LINK_MAP_64: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; TryFromCtx&lt;'a, Endian, [u8]&gt; for DSO_DEBUG_64 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DSO_DEBUG_64: 'a,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["scroll"] = [];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()