webpackJsonp([0xc93c5c6368bc],{385:function(e,t){e.exports={data:{markdownRemark:{html:'<!-- FIXME when was this? -->\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 600px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 95.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAATABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBP/EABYBAQEBAAAAAAAAAAAAAAAAAAMCAf/aAAwDAQACEAMQAAABrC/LCVTHWwmBRf/EABwQAAICAgMAAAAAAAAAAAAAAAECAxESIQAQIv/aAAgBAQABBQLIEMdK7VJ5jy2LqbgFdf/EABgRAAIDAAAAAAAAAAAAAAAAAAABEBEx/9oACAEDAQE/AVhan//EABcRAQADAAAAAAAAAAAAAAAAAAEAEBH/2gAIAQIBAT8BZjf/xAAbEAEBAAEFAAAAAAAAAAAAAAABADEQESJRYf/aAAgBAQAGPwJ7mykR7cszO2n/xAAcEAEBAQABBQAAAAAAAAAAAAABABFBITFRgZH/2gAIAQEAAT8h0AIJ9Ffsk+pZ0c9YGTytuwRq68wFDJv/2gAMAwEAAgADAAAAEGAAA//EABcRAQEBAQAAAAAAAAAAAAAAAAEAEEH/2gAIAQMBAT8QIQrjn//EABgRAAIDAAAAAAAAAAAAAAAAAAABEBEx/9oACAECAQE/ENDvn//EAB8QAQADAAEEAwAAAAAAAAAAAAEAESExUWFxgZGx0f/aAAgBAQABPxBGdRVKTa5hGhC818xyVVSlN/JSHVh+8Jm9KjGjykNl2HhxLxjMropAhJos6Js5nYPqf//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="patch synth pcb populated"\n        title=""\n        src="/static/patch-synth-pcb-populated-0bc256322a1f6fd82eea1f83215bc1fb-1b581.jpg"\n        srcset="/static/patch-synth-pcb-populated-0bc256322a1f6fd82eea1f83215bc1fb-0fbaa.jpg 400w,\n/static/patch-synth-pcb-populated-0bc256322a1f6fd82eea1f83215bc1fb-1b581.jpg 600w"\n        sizes="(max-width: 600px) 100vw, 600px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Excited by music, augmented reality, and writing fiddly assembly on microcontrollers. Empowered by\na fresh ability to etch my own PCBs. I set out to create a new kind of synthesizer.</p>\n<p>The Patch Synth was meant to be a digital <a href="https://en.wikipedia.org/wiki/Modular_synthesizer" target="_blank" rel="nofollow noopener noreferrer">modular synthesizer</a>.\nNormally modular synths use patch cables to connect functional modules together to create new sounds.\nThe resulting crazy tangle of wires accounts for at lot of the fun of modular synths, along with the\nphysical interface made up of buttons, knobs, sliders, etc. However all of that makes those synths\nquite large - definitely not something one could fit in a pants pocket.</p>\n<p>I wanted to make a small digital synth I could carry around in my pocket that also captured some of\nthe fun of a full modular synthesizer. To me that meant maintaining the ability to modify the sound\nusing "patch cables" strung between "synth modules". I envisioned a device that could be place into\nan augmented reality scene by tracking the location of a pattern on its surface. In augmented\nreality the device could be enlarged to include bays for many virtual synth modules, and those could\nbe connected by virtual patch cables. The real device would have several physical inputs and a\nphysical audio output which could be connected to the virtual synth modules. So once a set of\nmodules were patched together in AR using a phone the device could be held and used to make music on\nits own.</p>\n<p>To get started I designed the device. I used an AVR microcontroller because I was most familiar with\nthose at the time. I included some thumb potentiometers, a flat joystick from a PSP, some LEDs, and\nsome pads for capacitive touch input. On the back there was space for two coin cell batteries and\nspace for a Bluetooth radio to connect the device to a phone. The device was divided into two\nregions, one with most of the circuitry and controls, and the other with flat space for the\ncamera-trackable pattern.</p>\n<p>For the pattern I generated a QR code which pointed to a website and put it inside a square black\nborder. The black border was meant to make the pattern easily tracked using computer vision and the\nwebsite the QR code linked to was destined to provide the AR application needed to patch together\nthe synth\'s modules.</p>\n<p>I got as far as assembling the hardware for the first prototype and building a simple AR application\nto show 3D graphics overlaid on the device through a phone. The etch for the PCB was not perfect and\nthere was a short somewhere on the board so I couldn\'t get the microcontroller to flash itself. It\nended up being great inspiration for later projects, and I am happy with how the visual design of the\nPCB turned out. If I were to continue the project I would split the work into: 1) Creating and testing\nthe AR application. 2) Breadboarding the hardware for connecting to the phone, playing audio, and\nreading inputs. 3) A finalized PCB design with everything integrated.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1600px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 57.23844282238443%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACaklEQVQozy2R/U/aYBDHpTBCCw0GbOn707UPGIhKpmbGTVuhYCqUtwbHnDoUX5hT58KcgyrVEJctEY1uy34wy/6F/YsrbpfL5ZtLLt/P3Q25ECTs83E+nxAM0hjGo+gEjifwQMTrxdzuEY8n5KTbHUKQQXXS43GaGIIMOUGjaIXn30rSOgCHUF7juDYcbY0nUhxbJogjACxJakuSBeFpNNqB0JLl9wAsE4Tb5RqCGPYRwmWGMcLEeTKxSFJ5kinRzBYv2gI41jSrVLpvNO53dn41m7+bzXY+f6LrHQDcjnNseHhTBJkQORuPzExKUxT3PByusey1DG0AetnsXjp9t739c2PjWFHsUumNpn0xjLYoDridhetAMGVxfiqZAOzkCDNN82mS2hUlWxBuisXv6+t2tdpeWrooFrvVar9WuymXrf/DXm+d4/uy3I2PP2Nh68nkDhytJKPqhPSSIFuqalUqDmpD17dzOatYPDPNlqZtsqzLGZYwrC3LdYp9wTA6LZRhMi2I5XjcANw7luuoaq9cPsnnHfjDxcXTSuW8UOjlci1BGDhzqO9sYuxIhiYvzIbDMXz4aYRbGxu/lKIO9lddtwzjolb7Ua9f6Pp+KtUxjOtCwTkY8s/5UpL2WfZIfFzg+CViRAlFPojCHYx1AfiU0fZ0/Wpl5Y9t91dXP5tmM5s9mJvryvIAW0DR21isSdNbPH8AwC2EPelxg2ELDLPLMMfJZF9RrhXlWyZzNT/ffxCd6ek9hnnk/BlxuQyCqEQiM8HgK5J8TVENmjJJkg8Eohi2gOMLfr/q9yuODgTUB53C8SiKOsZ/AQCRjnmigmeEAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="patch synth pcb design qr"\n        title=""\n        src="/static/patch-synth-pcb-design-qr-65be45e07a67e52ff9baa746dd265c37-fe1b4.png"\n        srcset="/static/patch-synth-pcb-design-qr-65be45e07a67e52ff9baa746dd265c37-7e39b.png 400w,\n/static/patch-synth-pcb-design-qr-65be45e07a67e52ff9baa746dd265c37-e636c.png 800w,\n/static/patch-synth-pcb-design-qr-65be45e07a67e52ff9baa746dd265c37-fe1b4.png 1600w,\n/static/patch-synth-pcb-design-qr-65be45e07a67e52ff9baa746dd265c37-36b76.png 1644w"\n        sizes="(max-width: 1600px) 100vw, 1600px"\n      />\n    </span>\n  </span>\n  \n\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1600px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 57.23844282238443%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACJUlEQVQoz2VSa28SQRQtUAi7gcB2u8vuPHdnhm0gBSI1NtXYRFpfKUYgPpKmSoqpKLbSUPvQtmlKja9axUeNP9cLfjFxcj7ce5Mz554zMxYKh814nMTjLJVydZ1qWjGZzCcTmVhMj0TM8fH0fzCjUT0cHoPjalqd0o4QjzjfUHKFkD011SvkrxFcs6wdSk+lfOf770eA4pMQrxm7Z1mRUGhM6fq2UvcRqprWUSl/w3aWbHTXdVuU9z2/C3cx9jOb/SIl4Ec2e8A5DPcZG5KDdHrV44sT9lwuM1sWMw65YpoPMT6T6tjzBkp1ENqlFAoAcNqu+00pEA/B2mC4yVlDeldnSnmOy5PooksrtrPGRd/zQArwEuMjzk98fx1jYP4a6YdB2YzFmoR+lvIwV7iMVe9CeU1N1UtqviiWLXubUlhyh7GbhnHdMKDdJOQVpauOM0xM6PqelE0HP0DolstqqlRhXi2Xq3KyickHIT4KsUXIU9d9hhAwoYVhj5AhmWjxg+J0V6oGZXOmGSTTlzJkZbpwItQx986D7CHnYPurlN+V2sAY3P4OgjeMDdcG5bdCvMC46/l3CL1tTc5PZLY8NlABpL3PeRshMHUm5eko8OcIwRBuHAbGNG0QBJDhE0rXOYdI+8JvIVxFqI0xmIR3Oh/F9reAtHYZ62AcBWVQr1pWPZOZTaWWbfux47Rcp2HbNJGAL7BgGIuGsfAPKuk0JJfVNBD+A/cleIrnk7xgAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="patch synth pcb design"\n        title=""\n        src="/static/patch-synth-pcb-design-6bcaf8f4a03b6a3edc557e49239ba6ce-fe1b4.png"\n        srcset="/static/patch-synth-pcb-design-6bcaf8f4a03b6a3edc557e49239ba6ce-7e39b.png 400w,\n/static/patch-synth-pcb-design-6bcaf8f4a03b6a3edc557e49239ba6ce-e636c.png 800w,\n/static/patch-synth-pcb-design-6bcaf8f4a03b6a3edc557e49239ba6ce-fe1b4.png 1600w,\n/static/patch-synth-pcb-design-6bcaf8f4a03b6a3edc557e49239ba6ce-36b76.png 1644w"\n        sizes="(max-width: 1600px) 100vw, 1600px"\n      />\n    </span>\n  </span>\n  </p>',frontmatter:{title:"Patch AR Synth",date:"14.06.2012",description:"Modular synthesizer patch cables in AR",cover:{publicURL:"/static/patch-synth-pcb-populated-0bc256322a1f6fd82eea1f83215bc1fb.jpg",childImageSharp:{resize:{src:"/static/patch-synth-pcb-populated-0bc256322a1f6fd82eea1f83215bc1fb-648b2.jpg"}}}},fields:{slug:"/patch-ar-synth"},excerpt:"Excited by music, augmented reality, and writing fiddly assembly on microcontrollers. Empowered by\na fresh ability to etch my own PCBs. I…"}},pathContext:{slug:"/patch-ar-synth"}}}});
//# sourceMappingURL=path---patch-ar-synth-10f93ae2b799693237d7.js.map