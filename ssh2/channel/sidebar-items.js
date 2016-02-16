initSidebarItems({"struct":[["Channel","A channel represents a portion of an SSH connection on which data can be read and written.Channels denote all of SCP uploads and downloads, shell sessions, remote process executions, and other general-purpose sessions. Each channel implements the `Reader` and `Writer` traits to send and receive data. Whether or not I/O operations are blocking is mandated by the `blocking` flag on a channel's corresponding `Session`."],["ExitSignal","Data received from when a program exits with a signal."],["ReadWindow","Description of the read window as returned by `Channel::read_window`"],["Stream","A channel can have a number of streams, each identified by an id, each of which implements the `Read` and `Write` traits."],["WriteWindow","Description of the write window as returned by `Channel::write_window`"]]});