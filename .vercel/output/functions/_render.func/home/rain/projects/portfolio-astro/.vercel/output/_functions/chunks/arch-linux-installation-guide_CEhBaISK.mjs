import { a5 as __astro_tag_component__, a6 as Fragment, $ as createVNode } from './astro_CZkCPpGC.mjs';
import { c as $$Image } from './pages/__CX0p1IGG.mjs';
import 'clsx';

const frontmatter = {
  "title": "Arch Linux installation guide",
  "desc": "This guide walks you through installing and setting up Arch Linux from scratch like a pro",
  "pubon": "feb 16 2024",
  "img": "@media/arch-linux.png"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "step-1-download-the-arch-iso",
    "text": "Step 1: Download the Arch iso"
  }, {
    "depth": 4,
    "slug": "if-you-have-torrent",
    "text": "If you have torrent"
  }, {
    "depth": 4,
    "slug": "if-you-just-want-to-download-from-the-web",
    "text": "If you just want to download from the web"
  }, {
    "depth": 2,
    "slug": "step-2-create-the-installation-medium",
    "text": "Step 2: Create the installation medium"
  }, {
    "depth": 3,
    "slug": "if-youre-on-windows",
    "text": "If you\u2019re on Windows"
  }, {
    "depth": 3,
    "slug": "if-youre-either-on-macos-or-linux",
    "text": "If you\u2019re either on MacOS or Linux"
  }, {
    "depth": 2,
    "slug": "step-3-boot-it-with-live-usb",
    "text": "Step 3: Boot it with Live USB"
  }, {
    "depth": 3,
    "slug": "after-booting-to-boot-menu",
    "text": "After booting to boot menu"
  }, {
    "depth": 2,
    "slug": "in-the-live-iso",
    "text": "In the live ISO"
  }, {
    "depth": 2,
    "slug": "connect-to-the-internet",
    "text": "Connect to the internet"
  }, {
    "depth": 3,
    "slug": "ethernet-connection",
    "text": "Ethernet connection"
  }, {
    "depth": 3,
    "slug": "wifi-connection",
    "text": "Wifi connection"
  }, {
    "depth": 2,
    "slug": "partition-the-disk",
    "text": "Partition the disk"
  }, {
    "depth": 3,
    "slug": "partitions-you-will-need",
    "text": "Partitions you will need"
  }, {
    "depth": 2,
    "slug": "format-the-partitions",
    "text": "Format the partitions"
  }, {
    "depth": 3,
    "slug": "format-the-devsda1-boot",
    "text": "Format the /dev/sda1 (Boot)"
  }, {
    "depth": 3,
    "slug": "format-the-devsda2-swap",
    "text": "Format the /dev/sda2 (Swap)"
  }, {
    "depth": 3,
    "slug": "format-the-devsda3-root",
    "text": "Format the /dev/sda3 (Root)"
  }, {
    "depth": 3,
    "slug": "format-the-devsda4-home",
    "text": "Format the /dev/sda4 (Home)"
  }, {
    "depth": 2,
    "slug": "mount-the-partitions",
    "text": "Mount the partitions"
  }, {
    "depth": 2,
    "slug": "install-kernel-and-other-packages",
    "text": "Install kernel and other packages"
  }, {
    "depth": 2,
    "slug": "generate-fstab-data",
    "text": "Generate fstab data"
  }, {
    "depth": 2,
    "slug": "switch-from-live-system-to-newly-created-system",
    "text": "Switch from live system to newly created system"
  }, {
    "depth": 3,
    "slug": "set-timezone",
    "text": "Set timezone"
  }, {
    "depth": 3,
    "slug": "setting-up-locale",
    "text": "Setting up locale"
  }, {
    "depth": 4,
    "slug": "generate-locales",
    "text": "Generate locales"
  }, {
    "depth": 3,
    "slug": "create-hostname",
    "text": "Create hostname"
  }, {
    "depth": 3,
    "slug": "create-home-and-root-user",
    "text": "Create home and root user"
  }, {
    "depth": 4,
    "slug": "set-password-for-the-root-user",
    "text": "Set password for the root user"
  }, {
    "depth": 4,
    "slug": "create-a-home-user",
    "text": "Create a home user"
  }, {
    "depth": 2,
    "slug": "install-bootloader",
    "text": "Install bootloader"
  }, {
    "depth": 2,
    "slug": "unmount-partitions-and-reboot-to-enjoy",
    "text": "Unmount partitions and reboot to enjoy"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Arch Linux is yet another Linux distribution that follows the simple KISS principles which makes it very minimal. The image size of Arch Linux is just aroud 850 MB whereas other full setup Linux distributions are over 2 GB."
    }), "\n", createVNode(_components.p, {
      children: "The minimalism of Arch Linux also means it is lightweight so good for low-end computers and faster in performance as there are not so many programs by default."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Now let\u2019s install Arch Linux"
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-1-download-the-arch-iso",
      children: "Step 1: Download the Arch iso"
    }), "\n", createVNode(_components.p, {
      children: "The iso is the image of Arch Linux which you need to download and flash it in a USB."
    }), "\n", createVNode(_components.p, {
      children: ["Head over to ", createVNode(_components.a, {
        href: "https://archlinux.org/download/",
        children: "archlinux.org/download"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Now there are so many ways to download the iso and you might get overwelhmd. ", createVNode(_components.em, {
        children: "But don\u2019t worry I\u2019m here to help"
      }), " \u{1F46E}\u200D\u2642\uFE0F."]
    }), "\n", createVNode(_components.h4, {
      id: "if-you-have-torrent",
      children: "If you have torrent"
    }), "\n", createVNode(_components.p, {
      children: ["Then click on the ", createVNode(_components.strong, {
        children: ["Torrent for ", createVNode(_components.em, {
          children: "date"
        }), " link"]
      })]
    }), "\n", createVNode(_components.h4, {
      id: "if-you-just-want-to-download-from-the-web",
      children: "If you just want to download from the web"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Then scroll down and you will find mirrors all around the world."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Click on any link ", createVNode(_components.strong, {
            children: "which is under the country of yours"
          }), ". It will open a new page and there will be so many links."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Don\u2019t panic"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Click on the link that says ", createVNode(_components.code, {
            children: "archlinux-year.month.day-x86_64.iso"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Also you can download the ", createVNode(_components.code, {
            children: "archlinux-year.month.day-x86_64.iso.sig"
          }), ".\nThis is the signature key which will assure that the iso is valid and not modified."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "But you really don\u2019t need to verify as all mirrors are well trusted."
    }), "\n", createVNode(_components.h2, {
      id: "step-2-create-the-installation-medium",
      children: "Step 2: Create the installation medium"
    }), "\n", createVNode(_components.p, {
      children: "Now you need to put the iso into a USB stick. I\u2019ll tell you how to create a bootable medium on Windows or MacOS or Linux."
    }), "\n", createVNode(_components.h3, {
      id: "if-youre-on-windows",
      children: "If you\u2019re on Windows"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Download and install ", createVNode(_components.a, {
            href: "https://etcher.balena.io/",
            children: "Balena etcher"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Open ", createVNode(_components.em, {
            children: "etcher"
          }), " and select the just downloaded iso."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Insert a USB stick ", createVNode(_components.strong, {
            children: "but make sure that it is atleast 8 GB in size"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Click flash it."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "NOTE:"
        }), " Flashing will entirely delete all the data in the USB stick. So if you have something important, back it up first."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "And that\u2019s it, your live bootable USB stick is read \u{1F973}\uFE0F."
    }), "\n", createVNode(_components.h3, {
      id: "if-youre-either-on-macos-or-linux",
      children: "If you\u2019re either on MacOS or Linux"
    }), "\n", createVNode(_components.p, {
      children: "You can do the same steps as mentioned for Windows but as both Mac and Linux are based on UNIX OSs and you\u2019re also going to install Linux (which is almost like UNIX), I recommend to get familiar with the commandline at the beggening."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Plug the USB stick in"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Open a terminal"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Type ", createVNode(_components.code, {
            children: "lsblk"
          }), " and hit ", createVNode(_components.em, {
            children: "Enter/Return"
          }), ".\nThere you can see some data on a table like format. Like this:"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "~"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " $ lsblk"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "NAME"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "   MAJ:MIN"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " RM"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "   SIZE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " RO"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " TYPE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " MOUNTPOINTS"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "sda"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "      8"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ":0"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    0"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 465.8"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "G"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " disk"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "\u251C\u2500sda1"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "   8"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ":1"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    0"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "   500"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "M"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " part"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /boot/efi"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "\u251C\u2500sda2"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "   8"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ":2"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    0"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "     4"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "G"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " part"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " [SWAP]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "\u251C\u2500sda3"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "   8"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ":3"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    0"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    30"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "G"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " part"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "\u251C\u2500sda4"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "   8"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ":4"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    0"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "   200"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "G"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " part"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /home"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "\u2514\u2500sda5"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "   8"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ":5"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    0"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "   150"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "G"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " part"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "sdb"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "      10"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ":0"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "   0"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  62.3"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "G"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " disk"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "\u251C\u2500sdb1"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "   10"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ":1"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "   0"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  200"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "M"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "   0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " part"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "\u2514\u2500sdb2"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "   10"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ":2"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "   0"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  52"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "G"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " part"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["These are the disks your computer have. Now focus on the ", createVNode(_components.em, {
        children: "SIZE"
      }), " column and look for if the sizes matches or closer to the actual size of you USB stick."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "For example,"
        }), " my USB is 64 GB and ", createVNode(_components.code, {
          children: "sdb"
        }), " is the closest to that size so that\u2019s the ", createVNode(_components.strong, {
          children: "block device name"
        }), " of my USB stick."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["If you\u2019ve noticed it, ", createVNode(_components.strong, {
        children: ["note it\u2019s ", createVNode(_components.em, {
          children: "NAME"
        }), "."]
      })]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "NOTE:"
        }), " The ", createVNode(_components.em, {
          children: "NAME"
        }), " may not be ", createVNode(_components.code, {
          children: "sdb"
        }), " for you. It depends on which type of disk you have. For HDD and SSD it\u2019s ", createVNode(_components.code, {
          children: "sd[a-z]"
        }), " where ", createVNode(_components.strong, {
          children: "sd"
        }), " means solid disk and ", createVNode(_components.strong, {
          children: "[a-z]"
        }), " is the alphabetical order. It can also also ", createVNode(_components.code, {
          children: "nvme[a-z]"
        }), " if you have a NVME disk installed."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "After that use this comman below to flash:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "dd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " if=/path/to/file.iso"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " of=/dev/BLOCK_NAME"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " status=progress"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["We have used the ", createVNode(_components.code, {
        children: "dd"
      }), " command which is responsible to write data from one file to other."]
    }), "\n", createVNode(_components.p, {
      children: ["Now type the path to where is the iso file located as the ", createVNode(_components.code, {
        children: "if"
      }), " (input file) parameter."]
    }), "\n", createVNode(_components.p, {
      children: ["And type the name of the ", createVNode(_components.em, {
        children: "block device"
      }), " as the ", createVNode(_components.code, {
        children: "of"
      }), " (output file) parameter."]
    }), "\n", createVNode(_components.p, {
      children: ["Lastly, ", createVNode(_components.code, {
        children: "status=progress"
      }), " is to tell the ", createVNode(_components.code, {
        children: "dd"
      }), " command that we want to see a progress while flashing the iso to the drive."]
    }), "\n", createVNode(_components.p, {
      children: "Wait until the flashing is done and now you have succesfully made a bootable live USB stick."
    }), "\n", createVNode(_components.h2, {
      id: "step-3-boot-it-with-live-usb",
      children: "Step 3: Boot it with Live USB"
    }), "\n", createVNode(_components.p, {
      children: ["Poweroff your computer and boot in ", createVNode(_components.em, {
        children: "bootloader menu"
      }), ". This can be done by pressing some keys of combinations. Now typically each manufactures have different key combinations to boot."]
    }), "\n", createVNode(_components.p, {
      children: "Basically you have to power the computer on and as soon as the brand logo appears, continously press the keys to boot."
    }), "\n", createVNode(_components.p, {
      children: "You can easily find out in Google which key combination is needed to boot to boot menu."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "For Lenovo computers:"
        }), " press ", createVNode(_components.code, {
          children: "windows"
        }), " + ", createVNode(_components.code, {
          children: "F12"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "For Dell computers:"
        }), " press ", createVNode(_components.code, {
          children: "windows"
        }), " + ", createVNode(_components.code, {
          children: "F10"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "after-booting-to-boot-menu",
      children: "After booting to boot menu"
    }), "\n", createVNode(_components.p, {
      children: ["In the boot menu there will be some boot options, you have to look for which says ", createVNode(_components.code, {
        children: "USE: Drive USB"
      }), " and select it by pressing the ", createVNode(_components.em, {
        children: "arrow up/down keys"
      }), " and press ", createVNode(_components.em, {
        children: "enter"
      }), " to boot."]
    }), "\n", createVNode(_components.h2, {
      id: "in-the-live-iso",
      children: "In the live ISO"
    }), "\n", createVNode(_components.p, {
      children: ["After booting into the live iso you will get a black screen white some text or options. Select the first option (it will be automatically selected) hit ", createVNode(_components.em, {
        children: "enter"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Wait until it loads, those text are logs saying what is actually being done."
    }), "\n", createVNode(_components.h2, {
      id: "connect-to-the-internet",
      children: "Connect to the internet"
    }), "\n", createVNode(_components.p, {
      children: "When you are on the terminal the first thing you do is to connect to the internet."
    }), "\n", createVNode(_components.h3, {
      id: "ethernet-connection",
      children: "Ethernet connection"
    }), "\n", createVNode(_components.p, {
      children: "If you have an ethernet connection then you don\u2019t have to do anything, you\u2019re already connected."
    }), "\n", createVNode(_components.p, {
      children: ["Check if you\u2019re online or not by doing ", createVNode(_components.code, {
        children: "ping google.com"
      }), ", if you see some data are written every after 1 second or 2 then you are good to go."]
    }), "\n", createVNode(_components.h3, {
      id: "wifi-connection",
      children: "Wifi connection"
    }), "\n", createVNode(_components.p, {
      children: "Conneciton to Wifi is a bit tricky. Here are the following steps to connect to Wifi."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Your wifi card would propably blocked so you have turn it on by doing ", createVNode(_components.code, {
            children: "rfkill unblock wlan0"
          }), ". Where ", createVNode(_components.code, {
            children: "wlan0"
          }), " is the name of the Wifi card in Arch Linux."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Now link up you IP by doing ", createVNode(_components.code, {
            children: "ip link set wlan0 up"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Use the ", createVNode(_components.code, {
            children: "iwtcl"
          }), " to scan Wifi and connect."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "iwtcl"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " device"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " scan"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "iwtcl"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " station"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " get-networks"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "You will see all the available Wifi networks, Find the name of your Wifi and do the next step."
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "iwctl station connect *wifi_name*"
          }), ". Change ", createVNode(_components.em, {
            children: "wifi_name"
          }), " to your name of the Wifi. Now you surely have a password set to connect, ", createVNode(_components.code, {
            children: "iwctl"
          }), " will ask you to enter your password in the ", createVNode(_components.code, {
            children: "passphrase"
          }), " section. Simply enter your password and hit ", createVNode(_components.em, {
            children: "enter"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Do ", createVNode(_components.code, {
            children: "ping google.com"
          }), " to check if you\u2019re connected or not."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Lastly if you\u2019re connected enter ", createVNode(_components.code, {
            children: "dhcpcd wlan0 --nohook mtu"
          }), " to stay connected or your connection may get closed by ", createVNode(_components.code, {
            children: "rfkill"
          }), " again."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Your full commands will look like this:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "rfkill"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " unblock"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " wlan0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "ip"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " link"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " set"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " wlan0"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " up"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "iwtcl"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " device"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " scan"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "iwtcl"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " station"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " get-networks"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "iwctl"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " station"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " connect"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " wifi_name"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "dhcpcd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " wlan0"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --nohook"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " mtu"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "After sucessfully connected to the internet, it\u2019s time to partition the disk."
    }), "\n", createVNode(_components.h2, {
      id: "partition-the-disk",
      children: "Partition the disk"
    }), "\n", createVNode(_components.p, {
      children: "This is the most important step than all the other steps. You have to be very carefull while doing this step."
    }), "\n", createVNode(_components.p, {
      children: ["Type ", createVNode(_components.code, {
        children: "lsblk"
      }), " to list all the block devices, which we did while flashing the iso to the USB stick."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Now select your disk where you want to install Arch Linux."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["If that drive has partitions, then delete all the partitions one by one, by selecting them and pressing ", createVNode(_components.code, {
            children: "d"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["After deleting all partitions you will have one partition named as ", createVNode(_components.em, {
            children: "Free space"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "partitions-you-will-need",
      children: "Partitions you will need"
    }), "\n", createVNode(_components.p, {
      children: "While installing Linux it is always recommended to have multiple partitions. Here is my best strategy to create the perfect partitions."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Partition"
          }), createVNode(_components.th, {
            children: "Name"
          }), createVNode(_components.th, {
            children: "Size"
          }), createVNode(_components.th, {
            children: "Type"
          }), createVNode(_components.th, {
            children: "Mount point"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "/dev/sda1"
          }), createVNode(_components.td, {
            children: "Boot"
          }), createVNode(_components.td, {
            children: "512M"
          }), createVNode(_components.td, {
            children: "Efi System"
          }), createVNode(_components.td, {
            children: "/boot/efi"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "/dev/sda2"
          }), createVNode(_components.td, {
            children: "Swap"
          }), createVNode(_components.td, {
            children: "2G"
          }), createVNode(_components.td, {
            children: "Swap"
          }), createVNode(_components.td, {
            children: "NONE"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "/dev/sda3"
          }), createVNode(_components.td, {
            children: "Root"
          }), createVNode(_components.td, {
            children: "30G"
          }), createVNode(_components.td, {
            children: "Linux root (x86-64)"
          }), createVNode(_components.td, {
            children: "/"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "/dev/sda4"
          }), createVNode(_components.td, {
            children: "Home"
          }), createVNode(_components.td, {
            children: "Remaining"
          }), createVNode(_components.td, {
            children: "Linux file system"
          }), createVNode(_components.td, {
            children: "/home"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "This is the perfect file system for any Linux distribution. Every important partitions are separated so there is very very low chance for a system break."
    }), "\n", createVNode(_components.p, {
      children: "Now create the partitons as the above table:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Press ", createVNode(_components.code, {
          children: "n"
        }), " to create a new partition and give the size as mentioned"]
      }), "\n", createVNode(_components.li, {
        children: ["Press ", createVNode(_components.code, {
          children: "t"
        }), " to select its type as mentioned"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["After creating all the partitions like the table press ", createVNode(_components.code, {
        children: "w"
      }), " to write, type ", createVNode(_components.em, {
        children: "yes"
      }), " to confirm."]
    }), "\n", createVNode(_components.h2, {
      id: "format-the-partitions",
      children: "Format the partitions"
    }), "\n", createVNode(_components.p, {
      children: "Now it\u2019s time to format them to create file systems. Here are some details of formatting partitions."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["The ", createVNode(_components.code, {
            children: "Boot"
          }), " partition must be formatted with ", createVNode(_components.code, {
            children: "fat32"
          }), " file system."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["The ", createVNode(_components.code, {
            children: "Root"
          }), " and ", createVNode(_components.code, {
            children: "Home"
          }), " partitions can be in any file systems but ", createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "ext4"
            }), " is highly recommended"]
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Now let\u2019s format them. Below the ", createVNode(_components.code, {
        children: "-L"
      }), " flag means label."]
    }), "\n", createVNode(_components.h3, {
      id: "format-the-devsda1-boot",
      children: "Format the /dev/sda1 (Boot)"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mkfs.fat"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -F"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 32"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -L"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " boot"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /dev/sda1"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "format-the-devsda2-swap",
      children: "Format the /dev/sda2 (Swap)"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mkswap"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -L"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " swap"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /dev/sda2"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "format-the-devsda3-root",
      children: "Format the /dev/sda3 (Root)"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mkfs.ext4"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -L"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " root"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /dev/sda3"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "format-the-devsda4-home",
      children: "Format the /dev/sda4 (Home)"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mkfs.ext4"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -L"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " home"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /dev/sda4"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "mount-the-partitions",
      children: "Mount the partitions"
    }), "\n", createVNode(_components.p, {
      children: ["After formatting comes mounting. You have to mount each partition and they will be mounted automatically by ", createVNode(_components.code, {
        children: "fstab"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["While formatting we have used the ", createVNode(_components.code, {
        children: "-L"
      }), " flag to add labels. Now we can use the labels instead of ", createVNode(_components.code, {
        children: "/dev/sdaX"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["We generally use the ", createVNode(_components.code, {
        children: "mnt"
      }), " folder located at the top of the folders."]
    }), "\n", createVNode(_components.p, {
      children: "Do the same to mount all the partitions:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# mount root first"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mount"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /dev/disk/by-label/root"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /mnt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -p"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /mnt/boot/efi"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /mnt/home"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# mount boot"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mount"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /dev/disk/by-label/boot"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /mnt/boot/efi"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# mount home"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mount"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /dev/disk/by-label/home"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /mnt/home"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# start the swap"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "swapon"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /dev/disk/by-label/swap"
          })]
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "NOTE:"
        }), " While mounting, you have to mount the ", createVNode(_components.code, {
          children: "root"
        }), " first, then you can mount other partitions."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "install-kernel-and-other-packages",
      children: "Install kernel and other packages"
    }), "\n", createVNode(_components.p, {
      children: "After mounted root and all the other partitions, it\u2019s time for the longest part, installing packages."
    }), "\n", createVNode(_components.p, {
      children: "As I have mentioned Arch Linux is very minimal, so minimal that it doesn\u2019t come with a kernel or any other vital programs to run a system, we have to install them."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["For kernel there are four main kernel to choose, ", createVNode(_components.code, {
          children: "linux"
        }), ", ", createVNode(_components.code, {
          children: "linux-lts"
        }), ", ", createVNode(_components.code, {
          children: "linux-zen"
        }), " and ", createVNode(_components.code, {
          children: "linux-hardend"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["For my experience, ", createVNode(_components.code, {
        children: "linux-lts"
      }), " is the best kernel to choose."]
    }), "\n", createVNode(_components.p, {
      children: "Okay, now install the kernel and other packages:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "pacstrap"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -K"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /mnt"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " linux-lts"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " base"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " micro"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " grub"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " efibootmgr"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " networkmanager"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "generate-fstab-data",
      children: "Generate fstab data"
    }), "\n", createVNode(_components.p, {
      children: "Fstab is a file which contains data to mount your system. To generate a data file, use the command below:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "gen-fstab"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -U"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -p"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /mnt"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " >>"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /etc/fstab"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "switch-from-live-system-to-newly-created-system",
      children: "Switch from live system to newly created system"
    }), "\n", createVNode(_components.p, {
      children: ["Yes, generating fstab and installing kernel means your system has been created! But it\u2019s not over yet. First switch to the new system, in Arch we call it ", createVNode(_components.em, {
        children: "changing root"
      }), " hence the command name is also same."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "arch-chroot"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /mnt"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Your prompt will change when you change root. Now do the following configurations:"
    }), "\n", createVNode(_components.h3, {
      id: "set-timezone",
      children: "Set timezone"
    }), "\n", createVNode(_components.p, {
      children: "Set your timezone for the clock."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "timedatectl"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " list-timezones"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["You will see a list of ", createVNode(_components.code, {
        children: "Country/Ciy"
      }), "s. Now you can scroll up and down by presing ", createVNode(_components.code, {
        children: "Arrow Up / Down"
      }), " keys but the easy way is to press ", createVNode(_components.code, {
        children: "/"
      }), " and type your country name, hit enter and lines with the country you have typed will be highlited. Now just look for the city and press ", createVNode(_components.code, {
        children: "q"
      }), " to quit of it."]
    }), "\n", createVNode(_components.p, {
      children: ["Then use ", createVNode(_components.code, {
        children: "timedatectl set-timezone Country/City"
      }), ", replace Country with your country and City with your city."]
    }), "\n", createVNode(_components.h3, {
      id: "setting-up-locale",
      children: "Setting up locale"
    }), "\n", createVNode(_components.p, {
      children: ["You must set up a locale or some apps might not work probably. To set up a locale edit the ", createVNode(_components.code, {
        children: "/ete/locale.gen"
      }), " file with ", createVNode(_components.code, {
        children: "micro"
      }), " editor which we have installed while installing packages."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "micro"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /etc/locale.gen"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["While you\u2019re in the file, hit ", createVNode(_components.code, {
        children: "CTRL + F"
      }), " to open finder and type your locale. Now for American English type ", createVNode(_components.code, {
        children: "en_US"
      }), " and hit ", createVNode(_components.code, {
        children: "enter"
      }), " to seach."]
    }), "\n", createVNode(_components.p, {
      children: ["All the lines are started with a ", createVNode(_components.code, {
        children: "#"
      }), " which means comment. You have to uncomment you locale by removing the ", createVNode(_components.code, {
        children: "#"
      }), " and that\u2019s it."]
    }), "\n", createVNode(_components.p, {
      children: ["Now do ", createVNode(_components.code, {
        children: "CTRL + S"
      }), " to save and ", createVNode(_components.code, {
        children: "CTRL + Q"
      }), " to quit."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "I have used micro because it has very basic key bindings unlike nano which is also easy but can be difficult. At least it was difficult for me."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "generate-locales",
      children: "Generate locales"
    }), "\n", createVNode(_components.p, {
      children: ["To generate locales do ", createVNode(_components.code, {
        children: "locale-gen"
      }), " and do ", createVNode(_components.code, {
        children: "export LANG=en_US.UTF-8"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "create-hostname",
      children: "Create hostname"
    }), "\n", createVNode(_components.p, {
      children: "Now create a hostname for the computer. A hostname is the name of you computer so you can give it any name you want (without any spaces)."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "echo"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " thisPC"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " >"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /etc/hostname"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["I gave a my computer\u2019s name ", createVNode(_components.code, {
        children: "thisPC"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Also create a DNS host file for networking too."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "micro"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /etc/hosts"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Put the following same as below:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "127.0.0.1 localhost"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "::1 localhost"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "127.0.1.1 thisPC.localdomain localhost"
          })
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "NOTE:"
        }), " The last line it must be the same name which you\u2019ve written in ", createVNode(_components.code, {
          children: "/etc/hostname"
        }), " file."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Remember we downloaded ", createVNode(_components.code, {
        children: "networkmanager"
      }), " while installing the packages? Now it\u2019s time to enable it too."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "systemctl"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " enable"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " NetworkManager"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "From now on, Network Manager will manage all the networking."
    }), "\n", createVNode(_components.h3, {
      id: "create-home-and-root-user",
      children: "Create home and root user"
    }), "\n", createVNode(_components.p, {
      children: "The root user would have all priviliges which is not good to have all the priviliges all the time so we will also create a home user."
    }), "\n", createVNode(_components.p, {
      children: "The home user have to enter for password everytime they need admin priviliges."
    }), "\n", createVNode(_components.p, {
      children: "Now the root user is already created by default, you just have to set a passwod."
    }), "\n", createVNode(_components.h4, {
      id: "set-password-for-the-root-user",
      children: "Set password for the root user"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "passwd"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Enter a super secured password and repeat the secured password to complete."
    }), "\n", createVNode(_components.h4, {
      id: "create-a-home-user",
      children: "Create a home user"
    }), "\n", createVNode(_components.p, {
      children: "To create a home user:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "useradd"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -m"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " username"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "username"
      }), " should be small cpas and no spaces."]
    }), "\n", createVNode(_components.p, {
      children: "Add the user to some important groups."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Must add to the **wheel** group"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "usermod"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -aG"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " wheel,audio,network"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " username"
          })]
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Groups are the rights for specific commands or utilities. The sudo user has rights of all the available by default but not the home user so you have to add it by yourself."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Now create a password for the home user, password for the home user should be different from the root user."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "passwd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " username"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Enter a strong and complicated and repeat the strong and complicated to complete."
    }), "\n", createVNode(_components.p, {
      children: ["Now the home user does not have rights to use ", createVNode(_components.code, {
        children: "sudo"
      }), " command. To change this do ", createVNode(_components.code, {
        children: "micro /etc/sudoers"
      }), " to edit the sudoers file."]
    }), "\n", createVNode(_components.p, {
      children: ["Again press ", createVNode(_components.code, {
        children: "CTRL + F"
      }), " to find and type ", createVNode(_components.code, {
        children: "wheel"
      }), ", hit enter."]
    }), "\n", createVNode(_components.p, {
      children: ["Uncomment (remove the ", createVNode(_components.code, {
        children: "#"
      }), ") from the line where saying ", createVNode(_components.code, {
        children: "%wheel ALL=(ALL:ALL) ALL"
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "CTRL + S"
      }), " to save followed by ", createVNode(_components.code, {
        children: "CTRL + Q"
      }), " to quit out of micro."]
    }), "\n", createVNode(_components.p, {
      children: "And all the needed configurations are done! Last is to install a bootloader."
    }), "\n", createVNode(_components.h2, {
      id: "install-bootloader",
      children: "Install bootloader"
    }), "\n", createVNode(_components.p, {
      children: "This is the last step of the whole process. Now there are several bootloaders to choose. For the most convinient, Grub is always a popular choice."
    }), "\n", createVNode(_components.p, {
      children: "If you\u2019ve remembered we have already installed grub while installing kernel. So we just have to create the bootloader."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "grub-install"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --target=x86_64-efi"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --bootloader-id="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Arch Linux'"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --efi-directory=/boot/efi"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Then create the config"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "grub-mkconfig"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -o"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /boot/grub/grub.cfg"
          })]
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.code, {
          children: "--efi-directory"
        }), " will be where we created and mounted the boot partition."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Congragulations! You have successfully installed Arch Linux through the commandline."
      }), " \u{1F973}\uFE0F"]
    }), "\n", createVNode(_components.h2, {
      id: "unmount-partitions-and-reboot-to-enjoy",
      children: "Unmount partitions and reboot to enjoy"
    }), "\n", createVNode(_components.p, {
      children: "Now all is left to do is to unmount as we are currently in the newly created system."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Press ", createVNode(_components.code, {
            children: "CTRL + D"
          }), " quite a few times until you see the old prompt which was before changing root."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Do ", createVNode(_components.code, {
            children: "umount -R /mnt"
          }), " to unmount all the partitions on the ", createVNode(_components.code, {
            children: "/mnt"
          }), " folder."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Do ", createVNode(_components.code, {
            children: "reboot"
          }), " to reboot to your newly created Arch Linux system."]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/arch-linux-installation-guide.mdx";
const file = "/home/rain/projects/portfolio-astro/src/content/blog/arch-linux-installation-guide.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/rain/projects/portfolio-astro/src/content/blog/arch-linux-installation-guide.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
