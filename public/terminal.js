const terminal_prompt = document.querySelector('#term-prompt');
const terminal_prompt_old = document.querySelector('#pr-cmd');
const term_prv_inp = document.querySelector('#term-prompt-old');
let command_result = document.querySelector('#command-result');
const terminal = document.querySelector('#termcard');

const terminal_commands = {
    help: {
        description: "Displays a list of commands",
        command_author: "disrupt#8329",
        command_result: null,
    },
    echo: {
        description: "Print a line of text in the console",
        command_author: "disrupt#8329",
        command_result: null,
    },
    clear: {
        description: "Clear the terminal screen",
        command_author: "disrupt#8329",
        command_result: null,
    },
    social: {
        description: "Get a list of my social medias",
        command_author: "disrupt#8329",
        command_result: null,
    },
    commission: {
        description: "Hire me to do a project for you",
        command_author: "disrupt#8329",
        command_result: null,
    },
    languages: {
        description: "Display a list of programming languages I know",
        command_author: "disrupt#8329",
        command_result: null,
    },
}

const tcmd = Object.keys(terminal_commands)


function COMMAND_HANDLER(com) {
    let command = com[0]
    let args = com
    let echoExcludeIndex = 0; // exclude the first index of the command, which is the command name

    let cmdarg = args.filter((value, index) => echoExcludeIndex !== index)
    cmdarg = String(cmdarg).replace(/,/g, " ")

    if (command === 'help') {
        command_result.innerHTML =
        `&nbsp;&nbsp;• help - ${terminal_commands.help.description} <br />` +
        `&nbsp;&nbsp;• echo - ${terminal_commands.echo.description} <br />` +
        `&nbsp;&nbsp;• clear - ${terminal_commands.clear.description} <br />` +
        `&nbsp;&nbsp;• social - ${terminal_commands.social.description} <br />` +
        `&nbsp;&nbsp;• commission - ${terminal_commands.commission.description} <br />`+
        `&nbsp;&nbsp;• languages - ${terminal_commands.languages.description} <br />`
        
    }
    if (command === 'echo') {
        command_result.innerHTML = cmdarg
    }
    if (command === 'clear') {
        window.location.reload();
    }
    if (command === 'social') {
        command_result.innerHTML =
        `&nbsp;&nbsp;• Discord @ kitsu#8329 <br />` +
        `&nbsp;&nbsp;• Instagram @ idisrupts <br />` +
        `&nbsp;&nbsp;• Twitter @ idisrupts <br />` +
        `&nbsp;&nbsp;• Github @ i-disrupt <br />` +
        `&nbsp;&nbsp;_________________________<br /><br/>`+
        `&nbsp;&nbsp;• commissions@nodisrupt.net <br />` +
        `&nbsp;&nbsp;• buisness@nodisrupt.net <br />` +
        `&nbsp;&nbsp;• inquiries@nodisrupt.net <br />` 
        
    }
    if (command === 'commission') {
        command_result.innerHTML =
        `Inviting you to our Discord Server.` +
        ` From there, you can message our <b><i>paymentGateway</i></b> bot in order to commission me. <br />` +
        ` <br />` +
        `<b><i>Issues?</b></i> <br />` +
        `Contact <span class="font-bold px-1">commissions@nodisrupt.net</span> for <br />` +
        `issues, negotiations, and other methods of payment. <br />` 
        window.location.href('');
    }
    if (command === 'languages') {
        command_result.innerHTML =
        `<div class="bg-gray-800 px-2 py-1">Popular Languages I have worked with:</div> <br />` +
        `<div class="bg-gray-800 px-2 py-1">[2016 - now] - Python</div> <br />` +
        `<div class="bg-gray-800 px-2 py-1">[2017 - now] - Javascript</div> <br />` +
        `<div class="bg-gray-800 px-2 py-1">[2019 - now] - Java</div> <br />` +
        `<div class="bg-gray-800 px-2 py-1">[2020 - now] - PHP</div> <br />` +
        `<div class="bg-gray-800 px-2 py-1">[2020 - now] - TypeScript</div> <br />` +
        `<div class="bg-gray-800 px-2 py-1">[2020 - now] - C#</div> <br />` +
        `<div class="bg-gray-800 px-2 py-1">[2021 - now] - C++</div> <br />` 
    }

    terminal_prompt_old.classList.remove('hidden')
    term_prv_inp.innerHTML = command + ' ' + cmdarg
    terminal_prompt.value = '';
}

function INIT_SUBMIT_LISTENER() {
    document.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            let val = terminal_prompt.value;
            val = String(val).split(" ")

            if (tcmd.includes(val[0])) {
                console.log('[Handler] => Registering Command: ' + val[0])
                console.log(val)
                let res = COMMAND_HANDLER(val)
                console.log(res)
                

                // Scroll to bottom
                terminal.scrollTop = terminal.scrollHeight;
            } else {
                if (val[0] === '') {
                    command_result.innerHTML = "[Handler] Please enter a valid command."
                    console.log('[Handler] => Cannot register command: ' + val[0])
                } else {
                    command_result.innerHTML = "[Handler] Invalid Command: " + val[0]
                    console.log('[Handler] => Cannot register command: ' + val[0])
                }
                
            }
        }
    })
}

INIT_SUBMIT_LISTENER()

"use strict";
// @ts-check

const shortcut = {
  eventType: "keydown",
  eventTracker: [],
  shortcutExists: [],
  /**
   * @param {string} shortcut
   * @param {() => void} callback
   * @param {HTMLElement | undefined} DOMTarget
   */
  add(shortcut, callback, DOMTarget = window) {
    // Prevents multiple additions of the same shortcut
    if (this.shortcutExists[shortcut] === true) {
      return;
    }

    /**
     *
     * @param {KeyboardEvent} event
     */
    const keyTracker = (event) => {
      var metaWanted = {
        cmd: false,
        ctrl: false,
        shift: false,
        alt: false,
      };

      var metaPressed = {
        cmd: event.metaKey,
        ctrl: event.ctrlKey,
        shift: event.shiftKey,
        alt: event.altKey,
      };

      const shortcuts = shortcut.split("+");

      let matches = 0;

      for (let index = 0; index < shortcuts.length; index++) {
        if (shortcuts[index] in metaWanted) {
          metaWanted[shortcuts[index]] = true;
          matches++;
        } else {
          if (shortcuts[index] === event.key.toLowerCase()) {
            matches++;
          }
        }
      }

      // If we have matched the shortcut we issue the callback
      if (
        matches === shortcuts.length &&
        metaWanted["cmd"] === metaPressed["cmd"] &&
        metaWanted["ctrl"] === metaPressed["ctrl"] &&
        metaWanted["shift"] === metaPressed["shift"] &&
        metaWanted["alt"] === metaPressed["alt"]
      ) {
        callback();
      }
    };

    // Add the event listener
    // @ts-ignore
    DOMTarget.addEventListener(this.eventType, keyTracker);

    // Cache the event data so it can be removed later
    this.eventTracker[shortcut] = { element: DOMTarget, callback: keyTracker };

    this.shortcutExists[shortcut] = true;
  },
  /**
   * @param {string} shortcut
   */
  remove(shortcut) {
    shortcut = shortcut.toLowerCase();

    if (this.eventTracker[shortcut]) {
      const element = this.eventTracker[shortcut]["element"];
      const callback = this.eventTracker[shortcut]["callback"];

      element.removeEventListener(this.eventType, callback, false);

      delete this.eventTracker[shortcut];
      this.shortcutExists[shortcut] = false;
    }
  },
};

const app_body = document.querySelector('#shortcut_hook')

// Windows / Linux
shortcut.add('ctrl+shift+h', (e) => {
    console.log(e)
    COMMAND_HANDLER(['help']);
    // Scroll to bottom
    terminal.scrollTop = terminal.scrollHeight;
}, app_body)

// Mac
shortcut.add('cmd+shift+h', (e) => {
    COMMAND_HANDLER(['help']);
    // Scroll to bottom
    terminal.scrollTop = terminal.scrollHeight;
}, app_body)