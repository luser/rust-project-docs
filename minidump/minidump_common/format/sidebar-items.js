initSidebarItems({"constant":[["MINIDUMP_SIGNATURE","The 4-byte magic number at the start of a minidump file."],["MINIDUMP_VERSION","The version of the minidump format."],["VS_FFI_SIGNATURE","The expected value of `VS_FIXEDFILEINFO.signature`"],["VS_FFI_STRUCVERSION","The expected value of `VS_FIXEDFILEINFO.struct_version`"]],"enum":[["Arm64RegisterNumbers","Offsets into `CONTEXT_ARM64.iregs` for registers with a dediated or conventional purpose"],["ArmRegisterNumbers","Offsets into `CONTEXT_ARM.iregs` for registers with a dediated or conventional purpose"],["AssertionType","Known values of `MINIDUMP_ASSERTION_INFO._type` Taken from the definition in Breakpad's [minidump_format.h][fmt]."],["CvSignature","Known values for the `signature` field of `CV_HEADER`."],["ExceptionCodeLinux","Values for `MINIDUMP_EXCEPTION.exception_code` for crashes on Linux"],["ExceptionCodeMac","Values for `MINIDUMP_EXCEPTION.exception_code` for crashes on macOS"],["ExceptionCodeWindows","Values for `MINIDUMP_EXCEPTION.exception_code` for crashes on Windows"],["MINIDUMP_STREAM_TYPE","The types of known minidump data streams."],["MipsRegisterNumbers","Offsets into `CONTEXT_MIPS.iregs` for registers with a dediated or conventional purpose"],["PlatformId","Known values of `MINIDUMP_SYSTEM_INFO.platform_id`"],["Ppc64RegisterNumbers","Offsets into `CONTEXT_PPC64.gpr` for registers with a dediated or conventional purpose"],["PpcRegisterNumbers","Offsets into `CONTEXT_PPC.gpr` for registers with a dediated or conventional purpose"],["ProcessorArchitecture","Known values of `MINIDUMP_SYSTEM_INFO.processor_architecture`"],["SparcRegisterNumbers","Offsets into `CONTEXT_SPARC.g_r` for registers with a dediated or conventional purpose"]],"struct":[["ARMCpuInfo","Arm-specific CPU information (Breakpad extension)"],["ArmElfHwCaps","Possible values of `ARMCpuInfo.elf_hwcaps`"],["BreakpadInfoValid","Potential values for `MINIDUMP_BREAKPAD_INFO.validity`"],["CONTEXT_AMD64","An x86-64 (amd64) CPU context"],["CONTEXT_ARM","An ARM CPU context"],["CONTEXT_ARM64","An aarch64 (arm64) CPU context"],["CONTEXT_MIPS","A MIPS CPU context"],["CONTEXT_PPC","A PPC CPU context"],["CONTEXT_PPC64","A PPC64 CPU context"],["CONTEXT_SPARC","A SPARC CPU context"],["CONTEXT_X86","An x86 CPU context"],["CPU_INFORMATION","CPU information contained within the `MINIDUMP_SYSTEM_INFO` struct"],["CV_HEADER","The header common to `CV_INFO_PDB20`, `CV_INFO_PDB70`, and `CV_INFO_ELF` CodeView records."],["CV_INFO_ELF","An ELF Build ID."],["CV_INFO_PDB20","CodeView debug information in the older PDB 2.0 (\"NB10\") format."],["CV_INFO_PDB70","CodeView debug information in the current PDB 7.0 (\"RSDS\") format."],["ContextFlagsCpu","CPU type values in the `context_flags` member of `CONTEXT_` structs"],["DSO_DEBUG_32","DSO debug data for 32-bit Linux minidumps"],["DSO_DEBUG_64","DSO debug data for 64-bit Linux minidumps"],["FLOATING_SAVE_AREA_ARM","ARM floating point state"],["FLOATING_SAVE_AREA_ARM64","aarch64 floating point state"],["FLOATING_SAVE_AREA_MIPS","MIPS floating point state"],["FLOATING_SAVE_AREA_PPC","PPC floating point state"],["FLOATING_SAVE_AREA_SPARC","SPARC floating point state"],["FLOATING_SAVE_AREA_X86","x86 floating point state"],["GUID","A GUID as specified in Rpcdce.h"],["IMAGE_DEBUG_MISC","Obsolete debug record type defined in WinNT.h."],["LINK_MAP_32","Dynamic linker information for a shared library on 32-bit Linux"],["LINK_MAP_64","Dynamic linker information for a shared library on 64-bit Linux"],["MINIDUMP_ASSERTION_INFO","A Breakpad extension containing information about an assertion that terminated the process"],["MINIDUMP_BREAKPAD_INFO","A Breakpad extension containing some additional process information"],["MINIDUMP_DIRECTORY","Information about a data stream contained in a minidump file."],["MINIDUMP_EXCEPTION","Detailed information about an exception."],["MINIDUMP_EXCEPTION_STREAM","Information about the exception that caused the process to terminate."],["MINIDUMP_HEADER","The header at the start of a minidump file."],["MINIDUMP_LOCATION_DESCRIPTOR","A location within a minidump file comprised of an offset and a size."],["MINIDUMP_MEMORY_DESCRIPTOR","A range of memory contained within a minidump consisting of a base address and a location descriptor."],["MINIDUMP_MEMORY_INFO","Information about a memory region in a minidump"],["MINIDUMP_MEMORY_INFO_LIST","A list of memory regions in a minidump"],["MINIDUMP_MISC_INFO","Miscellaneous process information"],["MINIDUMP_MISC_INFO2","Miscellaneous process and system information"],["MINIDUMP_MISC_INFO3","Miscellaneous process and system information"],["MINIDUMP_MISC_INFO4","Miscellaneous process and system information"],["MINIDUMP_MODULE","Information about a single module (executable or shared library) from a minidump"],["MINIDUMP_SYSTEM_INFO","Processor and operating system information"],["MINIDUMP_THREAD","Information about a single thread from a minidump"],["MemoryProtection","Potential values for `MINIDUMP_MEMORY_INFO.protection` and `allocation_protection`"],["MemoryState","Potential values for `MINIDUMP_MEMORY_INFO.state`"],["MemoryType","Potential values for `MINIDUMP_MEMORY_INFO._type`"],["MiscInfoFlags","Known flags for `MINIDUMP_MISC_INFO*.flags1`"],["OtherCpuInfo","CPU information for non-x86 CPUs"],["SSE_REGISTERS","Possible contents of `CONTEXT_AMD64.float_save`."],["SYSTEMTIME","A date and time"],["TIME_ZONE_INFORMATION","Settings for a time zone"],["VECTOR_SAVE_AREA_PPC","PPC vector state"],["VS_FIXEDFILEINFO","Version information for a file"],["X86CpuInfo","x86-specific CPU information derived from the `cpuid` instruction"],["XMM_SAVE_AREA32","Possible contents of `CONTEXT_AMD64.float_save`."]],"type":[["RVA","An offset from the start of the minidump file."]]});