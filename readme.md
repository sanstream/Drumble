# Drumble

This is a description of how drumble works in terms of software, hardware architecture and user interaction.

## What Drumble solves

Drumble gives the user an easier to use interface for setting and configuring their electronic drum kit. Most drum kits come with a simple computer that gives them a preprogrammed, limited choice of sound effects that are associated with the components of the drum kit. Although more advanced systems exist, most of them are still stuck in crappy user-experience-land. These computers usually have a simple numeric led display and a bunch of buttons and dials, which make them initially confusing and require a learning curve, which is silly.

Drumble aims to take away the complexity of configuring your drum kit with the right sound effect and adds extra flexibility inherit to a visual computer (tablet or laptop), without becoming complicated again.

> Please note that Drumble is still in its experimentation stage. It might take some time for the first physical product to arrive, because this is a side project.

# A simple user interface.
The interface of Drumble's app is purposely simple, distraction-free and consistent, because a drummer needs to be able to use in a quickly and easily during practice, live performances or just for fun.

# Drumble is hackable
Drumble is fully open-sourced. Both the software ([https://github.com/sanstream/drumble/](Drumble's source code)) and hardware are freely available online. In theory you could therefore assemble it yourself. However because this requires knowledge about hardware, electronics and programming you can (somewhere in the future) buy the whole package online. Since the whole project is open-sourced you only would pay for the  hardware components and the assembly time.


# Hardware architecture

Drumble Hardware architecture is also simple and can be illustrated like this:

```
                      |--------- DrumbleBox --------|
input source 1 -------|>--|----------------------|   |                |-- Computer --|
input source 2 -------|>--|    Arduino/Genuino   |---|>---USB input---|              |--> Sound effect!
input source 3 -------|>--|    board             |   |                |--------------|
input source n -------|>--|----------------------|   |
                      |------------------------------|

```

It in essence works by triggering sound effects based on analog electric input signals in the range of 0-5 Volts. This means you could attach any kind of source input.
The Arduino/Genuino board has been flashed with the standard firmata provided by the Arduino IDE. This firmware allows the app (which uses node.js' jhonny-five) to receive data from the DrumbleBox(tm). Take a peek in the source code to see how this happens.
