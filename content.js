/* =====================================================================
   content.js  |  THE ONLY FILE YOU EDIT TO ADD CONTENT
   Sections:  A) Links   B) Blogs   C) Best practices
   ===================================================================== */

/* ===== A. YOUR LINKS (used in the nav, footer and cards) ===== */
const LINKS = {
  linkedin:   "https://www.linkedin.com/in/wil-dennison-9a48a028a/",
  github:     "https://github.com/runnindead",
  gitlab:     "https://gitlab.com/runnindead",
  medium:     "https://medium.com/@zeroscopesolutions",
  newsletter: "https://www.linkedin.com/newsletters/zeroscope-solutions-7384806620419178496/"
};

/* ===== B. BLOGS (shown on the Blogs page, newest first) =====
   TO ADD A BLOG:
     1. Copy blogs/post-template.html, rename it (post-yourtitle.html) and write your post in it.
     2. Copy ONE line below, paste it at the TOP of the list, and edit it.
   Fields:  file   = post file name inside /blogs
            title  = headline
            topic  = filter button name (new topics create new buttons)
            date   = shown above the title, e.g. "Oct 2026"
            read   = optional, e.g. "5 min read"
            summary= one-line description (optional)
            url    = optional: link to an outside article instead of a file */
const BLOGS = [
  { file:"post-vpn.html", title:"What is a VPN?", topic:"Networking", date:"June 2026", read:"5 min read",
    summary:"Without a VPN, your traffic is visible to anyone on the network. Here's what's actually happening under the hood." },
  { file:"post-firewalls.html", title:"Understanding Firewall Types", topic:"Networking", date:"June 9, 2026", read:"5 min read",
    summary:"Stateless, stateful, next-generation — breaking down how each firewall type works, what it protects against, and how to choose the right one for your environment." },
  { file:"post-phishing.html", title:"Phishing Attack Prevention: How to Identify and Avoid Phishing Scams", topic:"Security", date:"June 2026", read:"5 min read",
    summary:"Phishing is behind over 90% of data breaches — yet most people still can't spot one in time." },
  { file:"post-web.html", title:"Ever Wonder What Actually Happens Behind the Scenes When You Click a Link?", topic:"Web", date:"June 2026", read:"5 min read",
    summary:"Web servers, protocols, and status codes work together behind the scenes to deliver every webpage you visit — and understanding them is essential for security analysis." },
  { file:"post-passwords.html", title:"Strong vs Weak Passwords: Why Password Strength Matters in Cybersecurity", topic:"Security", date:"March 2026", read:"6 min read",
    summary:"Many cyberattacks still succeed because of weak passwords — understanding the difference could be the barrier between safety and a breach." },
  { file:"post-linux.html", title:"What is Linux?", topic:"Linux", date:"February 2026", read:"5 min read",
    summary:"The open-source operating system that powers everything from personal computers and servers to mobile phones, networking devices, and the cloud." },
  { file:"post-vlans.html", title:"Why are VLANs Important in Networking?", topic:"Networking", date:"January 5, 2026", read:"6 min read",
    summary:"VLANs let you logically divide a physical network — keeping devices separated, broadcasts contained, and networks secure without rewiring a single cable." },
  { file:"post-active-directory.html", title:"Active Directory Security: Why It's a Prime Target for Attackers", topic:"Security", date:"January 2026", read:"7 min read",
    summary:"Compromising Active Directory doesn't just give an attacker access to one system — it often gives them control over an entire organization." },
  { file:"post-network-traffic.html", title:"Network Traffic Tells the Full Story of What's Happening Inside a Network", topic:"Networking", date:"December 23, 2025", read:"6 min read",
    summary:"A system can appear clean and show no alerts — yet its network communications may tell a completely different story." },
  { file:"post-password-mfa.html", title:"Password Management and Multi-Factor Authentication: A Critical Layered Defense", topic:"Security", date:"December 10, 2025", read:"5 min read",
    summary:"Strong passwords are the first line of defense. MFA is the second. Together they stop the vast majority of credential-based attacks." },
  { file:"post-cia-triad.html", title:"Understanding the CIA Triad", topic:"Security", date:"December 3, 2025", read:"5 min read",
    summary:"Confidentiality, Integrity, and Availability — the three pillars every security architecture is built on, seen through real-world experience." },
  { file:"post-ai-phishing.html", title:"How Attackers Use Artificial Intelligence to Send Malicious Emails and How Defenders Respond", topic:"Security", date:"November 18, 2025", read:"7 min read",
    summary:"AI-generated phishing is indistinguishable from legitimate email. Here's how attackers are using it — and how defenders are fighting back." },
  { file:"post-mobile-security.html", title:"Inside Enterprise Mobile Security: The Power of MDM, MAM, and EMM Frameworks", topic:"Security", date:"November 11, 2025", read:"6 min read",
    summary:"BYOD is a security nightmare without the right controls. Here's how MDM, MAM, and EMM frameworks lock down corporate endpoints while keeping workers productive." },
  { file:"post-digital-forensics.html", title:"Digital Forensics Investigation", topic:"Security", date:"November 3, 2025", read:"7 min read",
    summary:"Every attacker leaves artifacts. Learn how investigators collect, preserve, and analyze digital evidence to reconstruct what happened — and who did it." },
  { file:"post-cloud-security.html", title:"Comparing AWS, Azure, and Google Cloud Security Models", topic:"Cloud", date:"October 29, 2025", read:"7 min read",
    summary:"Three clouds, three shared-responsibility models, three different security philosophies. Here's how they compare and how to choose the right one." },
  { file:"post-certifications.html", title:"Building a Career Path: The Best Certifications for IT and Cybersecurity", topic:"Career", date:"October 22, 2025", read:"8 min read",
    summary:"CompTIA A+ to PenTest+, CCNA to CEH — mapping the certification landscape so you can chart the fastest, smartest path into cybersecurity." },
  { file:"post-cloud-computing.html", title:"Understanding Cloud Computing", topic:"Cloud", date:"October 20, 2025", read:"5 min read",
    summary:"IaaS, PaaS, SaaS — demystifying the cloud delivery models that now underpin almost every enterprise, and the security challenges that come with them." }
];

/* ===== C. CYBERSECURITY BEST PRACTICES (cards at the bottom of the home page) ===== */
const PRACTICES = [
  { title:"Least privilege",     text:"Give every account and service only the access it needs, and review it often." },
  { title:"Patch fast",          text:"Most breaches use known flaws. Track your assets and update on a schedule." },
  { title:"Use MFA everywhere",  text:"Prefer hardware keys or authenticator apps over SMS codes." },
  { title:"Log and monitor",     text:"You can't respond to what you can't see. Centralize logs and set alerts." },
  { title:"Think like an attacker", text:"Run authorized tests to find gaps before real attackers do." },
  { title:"Back up and rehearse",text:"Keep offline backups and practice restoring them before you need them." }
];
