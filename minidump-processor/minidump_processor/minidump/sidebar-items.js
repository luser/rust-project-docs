initSidebarItems({"enum":[["Error",""],["MinidumpRawContext","The CPU-specific context structure."]],"struct":[["Minidump","An index into the contents of a minidump."],["MinidumpBreakpadInfo","MinidumpBreakpadInfo wraps MDRawBreakpadInfo, which is an optional stream in a minidump that provides additional information about the process state at the time the minidump was generated."],["MinidumpContext","MinidumpContext carries a CPU-specific MDRawContext structure, which contains CPU context such as register states.  Each thread has its own context, and the exception record, if present, also has its own context.  Note that if the exception record is present, the context it refers to is probably what the user wants to use for the exception thread, instead of that thread's own context.  The exception thread's context (as opposed to the exception record's context) will contain context for the exception handler (which performs minidump generation), and not the context that caused the exception (which is probably what the user wants)."],["MinidumpMemory",""],["MinidumpMiscInfo","Miscellaneous information about the process that wrote the minidump."],["MinidumpModule",""],["MinidumpModuleList",""],["MinidumpSystemInfo","Information about the system that generated the minidump."],["MinidumpThread",""],["MinidumpThreadList",""]],"trait":[["MinidumpStream",""],["Module",""]]});