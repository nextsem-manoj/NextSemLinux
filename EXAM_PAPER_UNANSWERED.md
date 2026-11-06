# Linux Professional Assessment Examination (75 Questions)
**Instructions:** 
- Time Allowed: 90 Minutes (Mock Exam Standard)
- Total Questions: 75 (Tier 1: 1–25 Basic | Tier 2: 26–50 Intermediate | Tier 3: 51–75 Advanced)
- Each question has one single correct answer. Select the best option (A, B, C, or D).

---

## Section 1: Basic Linux Fundamentals (Questions 1–25)

#### 1. Which command displays the absolute path of the current working directory?
- A) `dir`
- B) `pwd`
- C) `whereami`
- D) `path`

#### 2. How can you list all files in a directory, including hidden files (those starting with a dot)?
- A) `ls -l`
- B) `ls -h`
- C) `ls -a`
- D) `ls -d`

#### 3. Which flag allows `mkdir` to create parent directories as needed without throwing an error?
- A) `-r`
- B) `-f`
- C) `-p`
- D) `-a`

#### 4. Which command immediately changes your working directory to the current user's home directory?
- A) `cd ..`
- B) `cd /`
- C) `cd ~`
- D) `cd .`

#### 5. What flag must be passed to `cp` to copy a non-empty directory and its contents?
- A) `-d`
- B) `-r` (or `-R`)
- C) `-f`
- D) `-p`

#### 6. Which command is used both to move files between directories and to rename files?
- A) `rn`
- B) `move`
- C) `mv`
- D) `mod`

#### 7. Which command recursively forces the deletion of a directory and all its contents without interactive confirmation?
- A) `rmdir -f`
- B) `delete -r`
- C) `rm -rf`
- D) `erase -a`

#### 8. Which command displays the first 10 lines of a file by default?
- A) `top`
- B) `first`
- C) `head`
- D) `start`

#### 9. Which command and flag combination allows you to monitor a growing log file in real time?
- A) `cat -w`
- B) `tail -f`
- C) `watch -l`
- D) `head -f`

#### 10. What does the `touch` command do when executed on an existing file?
- A) Erases its contents to 0 bytes
- B) Updates its access and modification timestamps
- C) Displays its MIME type
- D) Locks the file from modification

#### 11. Which standard Linux directory stores system-wide configuration files?
- A) `/var`
- B) `/usr`
- C) `/etc`
- D) `/opt`

#### 12. Where are variable files, such as application and system log files, typically stored?
- A) `/tmp`
- B) `/var/log`
- C) `/run`
- D) `/srv`

#### 13. Which command prints the username of the user currently executing the terminal session?
- A) `whoami`
- B) `id -u`
- C) `users`
- D) `logname -s`

#### 14. Which command shows the Linux kernel release version?
- A) `os-release`
- B) `uname -r`
- C) `kernel -v`
- D) `sysinfo`

#### 15. How do you view filesystem disk space usage in human-readable format (MB, GB)?
- A) `du -a`
- B) `df -h`
- C) `diskstat -m`
- D) `fdisk -s`

#### 16. What is the octal representation of the permission string `rwxr-xr--`?
- A) `754`
- B) `764`
- C) `654`
- D) `745`

#### 17. Which command is used to modify the access permissions of a file or directory?
- A) `chown`
- B) `chmod`
- C) `chgrp`
- D) `setperm`

#### 18. Which command changes the ownership of a file to user `alice` and group `developers`?
- A) `chmod alice:developers file.txt`
- B) `chown alice:developers file.txt`
- C) `chown alice -g developers file.txt`
- D) `setowner alice.developers file.txt`

#### 19. What redirection operator overwrites the destination file with command standard output?
- A) `>>`
- B) `<`
- C) `>`
- D) `2>`

#### 20. What redirection operator appends command standard output to the end of a file without overwriting?
- A) `>`
- B) `>>`
- C) `|`
- D) `&>`

#### 21. Which operator passes the standard output of one command as standard input to another command?
- A) `>`
- B) `&`
- C) `|`
- D) `;`

#### 22. What keyboard shortcut in a Bash shell searches backwards through your command history?
- A) `Ctrl + C`
- B) `Ctrl + Z`
- C) `Ctrl + R`
- D) `Ctrl + L`

#### 23. Which command terminates the currently running foreground command in the terminal?
- A) `Ctrl + Z`
- B) `Ctrl + D`
- C) `Ctrl + C`
- D) `Ctrl + \`

#### 24. On Debian and Ubuntu systems, which package manager command installs a new package named `nginx`?
- A) `rpm -i nginx`
- B) `yum install nginx`
- C) `apt install nginx`
- D) `pacman -S nginx`

#### 25. Which directory contains temporary files that are usually wiped on system reboot?
- A) `/dev`
- B) `/tmp`
- C) `/mnt`
- D) `/proc`

---

## Section 2: Intermediate Administration & Scripting (Questions 26–50)

#### 26. Which command displays a snapshot of all active processes running on the system with user context and terminal info?
- A) `ps aux`
- B) `pstree -f`
- C) `killall -v`
- D) `proc -l`

#### 27. Which signal is sent when running `kill -9 <PID>`?
- A) `SIGINT`
- B) `SIGTERM`
- C) `SIGKILL`
- D) `SIGHUP`

#### 28. What is the fundamental difference between `SIGTERM` (signal 15) and `SIGKILL` (signal 9)?
- A) `SIGTERM` cannot be caught or ignored; `SIGKILL` can be handled.
- B) `SIGTERM` requests graceful shutdown and can be caught; `SIGKILL` terminates immediately and cannot be caught.
- C) `SIGTERM` sends processes to background; `SIGKILL` pauses execution.
- D) `SIGTERM` is sent by kernel only; `SIGKILL` can only be sent by root.

#### 29. Which command modifies the priority of an *already running* process?
- A) `nice`
- B) `renice`
- C) `priority`
- D) `chpriority`

#### 30. Which `find` command locates all files in `/var/log` ending with `.log` that are larger than 50MB?
- A) `find /var/log -name "*.log" -size +50M`
- B) `find /var/log -file "*.log" -greater 50M`
- C) `find /var/log -type f -size 50M`
- D) `search /var/log -ext "log" -size >50MB`

#### 31. Which command performs an in-place string replacement of `foo` with `bar` across all occurrences in `config.txt`?
- A) `awk '{replace foo bar}' config.txt`
- B) `sed -i 's/foo/bar/g' config.txt`
- C) `grep -r 'foo/bar' config.txt`
- D) `tr 'foo' 'bar' < config.txt`

#### 32. What does the command `awk -F: '{print $1, $3}' /etc/passwd` do?
- A) Searches for `:` in `/etc/passwd` and prints line numbers 1 and 3
- B) Splits lines by `:` and prints username ($1) and UID ($3)
- C) Replaces field 1 with field 3 using `:` delimiter
- D) Prints first 3 characters of each line

#### 33. Which flag tells `grep` to perform a case-insensitive search?
- A) `-v`
- B) `-n`
- C) `-i`
- D) `-c`

#### 34. What file stores local user encrypted password hashes on modern Linux systems?
- A) `/etc/passwd`
- B) `/etc/security`
- C) `/etc/shadow`
- D) `/etc/gshadow`

#### 35. How do you append user `devuser` to the secondary/supplementary group `docker` without removing existing groups?
- A) `usermod -g docker devuser`
- B) `usermod -aG docker devuser`
- C) `groupadd devuser docker`
- D) `passwd -g docker devuser`

#### 36. What is the effect of setting the Sticky Bit on a shared directory like `/tmp`?
- A) Prevents anyone except root from reading files in the directory
- B) Only the file's owner, directory owner, or root can delete or rename the file
- C) Any newly created file automatically inherits the directory's group
- D) Files are permanently stored in RAM for faster access

#### 37. What does the permission `-rwsr-xr-x` signify regarding the `s` in the user's execution bit?
- A) Sticky bit is set on the binary
- B) SUID (Set User ID) is active; the program executes with the file owner's privileges
- C) SGID (Set Group ID) is active
- D) The file is in safe-execution mode

#### 38. If the default system `umask` is `022`, what are the default permissions of a newly created regular file?
- A) `755` (`rwxr-xr-x`)
- B) `644` (`rw-r--r--`)
- C) `666` (`rw-rw-rw-`)
- D) `700` (`rwx------`)

#### 39. Which command displays listening TCP and UDP sockets with numeric port numbers and associated process PIDs?
- A) `ping -tulnp`
- B) `ss -tulnp`
- C) `ip link show`
- D) `traceroute -p`

#### 40. In standard Linux cron syntax (`* * * * *`), what does the 3rd field represent?
- A) Minute (0-59)
- B) Hour (0-23)
- C) Day of the month (1-31)
- D) Day of the week (0-6)

#### 41. Which command creates a gzip-compressed tar archive named `backup.tar.gz` from the folder `/var/data`?
- A) `tar -xzvf backup.tar.gz /var/data`
- B) `tar -czvf backup.tar.gz /var/data`
- C) `tar -tzvf /var/data backup.tar.gz`
- D) `zip -tar backup.tar.gz /var/data`

#### 42. What is the difference between a Hard Link and a Symbolic (Soft) Link?
- A) Hard links can cross filesystems; soft links cannot.
- B) Hard links share the same inode number and data blocks; soft links point to the file path.
- C) Deleting the original file breaks hard links immediately.
- D) Soft links cannot point to directories; hard links can.

#### 43. Which command instructs systemd to reload its unit configuration files from disk after you modify a `.service` file?
- A) `systemctl restart service`
- B) `systemctl daemon-reload`
- C) `systemctl reload-all`
- D) `service systemd refresh`

#### 44. Which tool displays real-time disk I/O activity per process?
- A) `top`
- B) `iotop`
- C) `netstat`
- D) `free`

#### 45. What does the command `journalctl -u nginx.service -f` do?
- A) Dumps Nginx configuration syntax errors
- B) Follows real-time systemd journal logs specifically for `nginx.service`
- C) Forces restart of Nginx in debug mode
- D) Clears all historical logs for Nginx

#### 46. Which file contains the list of nameservers configured for DNS resolution on traditional Linux systems?
- A) `/etc/hosts`
- B) `/etc/resolv.conf`
- C) `/etc/nsswitch.conf`
- D) `/etc/networks`

#### 47. Which command shows which process currently has an open lock or handle on `/var/log/syslog`?
- A) `fuser /var/log/syslog` (or `lsof /var/log/syslog`)
- B) `pslock /var/log/syslog`
- C) `chkproc /var/log/syslog`
- D) `stat -p /var/log/syslog`

#### 48. What command is used to configure standard Linux network interfaces and routing using modern `iproute2`?
- A) `ifconfig`
- B) `route`
- C) `ip`
- D) `netconf`

#### 49. What is the effect of running `nohup command &` in a terminal?
- A) Runs the command with root privileges in background
- B) Ignores the `SIGHUP` signal, allowing the process to continue running after terminal logout
- C) Lowers CPU nice value to maximum background level
- D) Prevents the process from writing output to disk

#### 50. How can you display total memory and swap usage formatted in megabytes?
- A) `vmstat -M`
- B) `free -m`
- C) `meminfo -mb`
- D) `swapon -s`

---

## Section 3: Advanced Kernel, Security & Performance (Questions 51–75)

#### 51. Which command loads a kernel module along with all its unresolved module dependencies?
- A) `insmod`
- B) `modprobe`
- C) `lsmod -a`
- D) `depmod -i`

#### 52. What is the fundamental difference between `insmod` and `modprobe`?
- A) `insmod` resolves dependencies automatically; `modprobe` requires exact `.ko` path.
- B) `modprobe` parses module dependency files (`modules.dep`) and automatically loads dependencies; `insmod` only loads a single specified file without dependency resolution.
- C) `modprobe` is deprecated in Linux kernel 5.x+.
- D) `insmod` operates at boot; `modprobe` operates at shutdown.

#### 53. Where can you permanently modify Linux kernel runtime parameters such as `net.ipv4.ip_forward`?
- A) `/etc/sysctl.conf` (or `/etc/sysctl.d/*.conf`)
- B) `/proc/sys/kernel/defaults`
- C) `/boot/grub/sysctl.cfg`
- D) `/etc/security/limits.conf`

#### 54. What command dynamically traces all system calls (`open`, `read`, `write`, `socket`) executed by PID 1420?
- A) `ltrace -p 1420`
- B) `strace -p 1420`
- C) `gdb --pid 1420`
- D) `perf top --pid 1420`

#### 55. What does the command `strace -c` output when running a process?
- A) Real-time memory allocation map
- B) Statistical summary report of time, calls, and errors for each system call
- C) Core dump output
- D) CPU cache miss rates

#### 56. In the Linux Logical Volume Manager (LVM) workflow, what is the correct order of abstraction layers from raw storage to filesystem?
- A) Volume Group (VG) -> Physical Volume (PV) -> Logical Volume (LV) -> Filesystem
- B) Physical Volume (PV) -> Volume Group (VG) -> Logical Volume (LV) -> Filesystem
- C) Logical Volume (LV) -> Physical Volume (PV) -> Volume Group (VG) -> Filesystem
- D) Physical Volume (PV) -> Logical Volume (LV) -> Volume Group (VG) -> Filesystem

#### 57. Which command is used to resize an existing `ext4` filesystem to fill its newly extended logical volume online?
- A) `xfs_growfs`
- B) `resize2fs`
- C) `e2fsck -f`
- D) `lvresize -fs`

#### 58. How does `XFS` filesystem resizing differ fundamentally from `ext4`?
- A) XFS cannot be resized while mounted.
- B) XFS uses `xfs_growfs` while mounted and cannot be shrunk (reduced in size).
- C) XFS can be shrunk below its minimum inode limit.
- D) XFS requires unmounting and running `resize_xfs`.

#### 59. Which systemd target corresponds to legacy SysV runlevel 3 (multi-user, non-graphical console mode)?
- A) `default.target`
- B) `graphical.target`
- C) `multi-user.target`
- D) `rescue.target`

#### 60. What Linux kernel feature provides resource metering and limits (CPU, memory, disk I/O, network) for groups of processes?
- A) Namespaces
- B) Control Groups (cgroups)
- C) AppArmor
- D) Seccomp

#### 61. What Linux kernel subsystem isolates system resources so that a process sees its own independent PID tree, network stack, and mount points?
- A) SELinux
- B) cgroups
- C) Linux Namespaces
- D) Netfilter

#### 62. Which command inspects the current operational mode of SELinux?
- A) `sestatus` (or `getenforce`)
- B) `selinux -v`
- C) `checkenforce`
- D) `auditctl -s`

#### 63. If SELinux is in `Permissive` mode, what behavior does it exhibit?
- A) Enforces all security policies and drops unauthorized requests
- B) Disables kernel security hooks entirely
- C) Logs policy violations without actively blocking or denying actions
- D) Switches enforcement based on user UID

#### 64. What command restores the default SELinux security context on the directory `/var/www/html` recursively based on system policy rules?
- A) `chcon -R /var/www/html`
- B) `restorecon -Rv /var/www/html`
- C) `setenforce -R /var/www/html`
- D) `semanage permissive -a httpd_t`

#### 65. What modern Linux subsystem replaced `iptables`, `ip6tables`, `arptables`, and `ebtables` as the unified packet filtering engine?
- A) `ufw`
- B) `nftables`
- C) `firewalld`
- D) `BPFdoor`

#### 66. What Linux kernel mechanism is triggered when system physical memory and swap are completely exhausted?
- A) Kernel Panic Immediate Halt
- B) Out-Of-Memory (OOM) Killer
- C) Dynamic Page Throttler
- D) Swap Rebalancer

#### 67. How can you adjust a mission-critical process (PID 500) so the OOM Killer is least likely to terminate it?
- A) `echo -1000 > /proc/500/oom_score_adj`
- B) `echo 1000 > /proc/500/oom_score_adj`
- C) `renice -20 -p 500`
- D) `setfacl -m u:root:rwx /proc/500`

#### 68. Which tool allows you to inspect and modify POSIX Access Control Lists (ACLs) to grant specific user permissions without altering base permissions?
- A) `chmod` and `chown`
- B) `setfacl` and `getfacl`
- C) `attr` and `setattr`
- D) `visudo`

#### 69. In shell scripting, which command intercepts POSIX signals (e.g., `SIGINT`, `SIGTERM`, `EXIT`) to execute cleanup routines?
- A) `catch`
- B) `trap`
- C) `signal_handle`
- D) `intercept`

#### 70. What is a "Zombie Process" (state `Z` in `ps`) in Linux?
- A) A process executing malicious unauthorized code in kernel space
- B) A process that has finished execution, but whose exit status has not yet been read by its parent via `wait()`
- C) A process disconnected from its controlling TTY
- D) A background thread stuck in an uninterruptible disk sleep loop (`D` state)

#### 71. If a parent process terminates before its child process finishes, what process adopts the orphan child on modern systemd systems?
- A) The process is killed immediately
- B) PID 1 (`systemd` / init) or a configured subreaper
- C) The kernel swapper (PID 0)
- D) The current TTY session leader

#### 72. Which file in `/proc` provides the live virtual memory statistics and buffer/cache consumption breakdown of the system?
- A) `/proc/stat`
- B) `/proc/meminfo`
- C) `/proc/vm/details`
- D) `/proc/sys/vm/status`

#### 73. What is the fundamental difference between the system I/O multiplexing calls `select`/`poll` and `epoll`?
- A) `select` and `poll` scale $O(1)$ with file descriptors; `epoll` scales $O(N)$.
- B) `epoll` scales $O(1)$ with active events using an in-kernel event list; `select`/`poll` poll linearly through all descriptors in $O(N)$ time.
- C) `epoll` only works on regular files, not network sockets.
- D) `select` supports unlimited descriptors; `epoll` is limited to 1024.

#### 74. How do you create an isolated network namespace named `net_ns1` and execute a bash shell inside it?
- A) `ip netns add net_ns1` then `ip netns exec net_ns1 bash`
- B) `namespace --create net_ns1 bash`
- C) `chroot /net/net_ns1 bash`
- D) `systemd-nspawn -n net_ns1 bash`

#### 75. Where is Pluggable Authentication Module (PAM) configuration for the `sudo` command defined?
- A) `/etc/security/sudoers`
- B) `/etc/pam.d/sudo`
- C) `/etc/pam.conf.d/sudo.cfg`
- D) `/usr/lib/pam/sudo.so`

