# 🐧 NextSemLinux: Professional Assessment Suite (75 Questions)

A complete Linux evaluation and mock examination platform created for the **NextSem Ecosystem**, covering **Basic**, **Intermediate**, and **Advanced** tiers (25 questions each, 75 total).

---

## 🚀 Quick Start (Interactive Web Interface)

Run the local dev server directly with Node (zero external dependencies required):

```bash
npm run dev
# or
npm start
```

Access the interactive web app in your browser at:
👉 **[http://localhost:3006](http://localhost:3006)**

---

## 📦 What's Included in This Project

| File | Purpose |
| :--- | :--- |
| **`index.html`** | Modern glassmorphic, responsive Tailwind web portal for taking the test. |
| **`app.js` & `styles.css`** | Application engine handling practice mode, timed exam mode, scoring & filters. |
| **`questions.json`** | All 75 questions cleanly serialized with options, correct answer keys, and explanations. |
| **`EXAM_PAPER_UNANSWERED.md`** | **Standalone Exam Paper**: All 75 questions with multiple choices and **NO answers at the bottom** (ideal for printing or blind assessment). |
| **`LINUX_ASSESSMENT_75.md`** | Complete assessment with full answer key and technical explanations. |
| **`server.js`** | Zero-dependency native Node HTTP static server. |

---

## 🎯 Test Tier Breakdown

### 1. Basic Linux (Questions 1–25)
- Filesystem navigation (`pwd`, `cd`, `ls`)
- File operations (`cp -r`, `mv`, `rm -rf`, `touch`, `head`, `tail -f`)
- File permissions (`chmod`, `chown`, octal values)
- Redirection & pipelines (`>`, `>>`, `|`)
- Linux FHS standard directories (`/etc`, `/var/log`, `/tmp`)

### 2. Intermediate Linux (Questions 26–50)
- Process management (`ps aux`, `kill -9`, `SIGTERM` vs `SIGKILL`, `renice`, `nohup`)
- Text manipulation (`grep -i`, `awk`, `sed -i`, `find -size`)
- User & group administration (`/etc/shadow`, `usermod -aG`)
- Special permissions (Sticky Bit, SUID, `umask`)
- Networking & systemd (`ss -tulnp`, `ip`, `systemctl daemon-reload`, `journalctl -f`)

### 3. Advanced Linux (Questions 51–75)
- Kernel modules (`modprobe` vs `insmod`, `/proc`, `sysctl.conf`)
- Tracing & profiling (`strace -p`, `strace -c`)
- Storage & LVM (`pvcreate`, `vgcreate`, `lvcreate`, `resize2fs`, `xfs_growfs`)
- Cgroups, Namespaces & Containers (`ip netns`)
- Security hardening (SELinux modes & `restorecon`, `nftables`, PAM `/etc/pam.d/sudo`)
- Linux memory internals & OOM Killer (`oom_score_adj`, `/proc/meminfo`, `epoll` vs `select`)

