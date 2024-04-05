# SAMMI-Twitch-ServiceNow app

## TODO

- [ ] move chat sender to a bot account
    - [ ] pointsthingjr
    - [ ] pointsthinggr
    - [ ] pointymcpointface
    - [ ] servicenowbeepboop
    - [ ] servicenowdevpointgram
    - [ ] SNOWbot
    - [ ] PointsOnNow
    - [ ] pointSNOW
- [ ] record chatter presence
    - [X] add confirmed_real to table
    - [X] send rest message of chatter presence
    - [X] we went with adding !points as the call but maybe just do any person chatting sends the call
- [ ] add confirmed troll -eric
- [ ] things you can do with points
- [ ] leaderboard
- [X] move this to a markdown file dummy
- [X] add source control before you do anything else you might regret
- [X] add captions -chris
- [ ] stream interactions
    - [ ] stream avatars -ditziv
    - [ ] the more disruptive commands can cost points (but duplicate score) -ditziv
    - [ ] donut bounds instead of just scrolls
    - [ ] muppets critics gallery -eric+asteroid
    - [ ] !jumpscare -laszlo
- [ ] recruit #yaylee to do a screamo chorus.
- [ ] ability to gift points to others -laszlo
    - [ ] ++ in chat is the way to give points -eric

### Spending points

- [X] add a field to track currency
~~- [ ] update form~~ doesn't sync with sdk
- [ ] ? add a field/table to say how much each command costs
- [X] update presence poitns giver to also increment the currency field
- [X] add a !currency command
- [ ] update presence points giver to also store everyones score in SAMMI (just update the response in the SRAPI and then store it in a variable on SAMMI)
- [ ] update var gr and snap to check against the local score
- [ ] send a payload to sn to update currency
- [ ] update local score

## BUGS

- [ ] weird delay/wrong person situation with !points
- [X] why does !snap not return to scene
