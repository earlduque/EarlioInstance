# SAMMI-Twitch-ServiceNow app

## JSON for SAMMI Deck

[Link](https://github.com/earlduque/EarlioInstance/blob/main/SAMMI%20Deck.json)

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
- [X] record chatter presence
    - [X] add confirmed_real to table
    - [X] send rest message of chatter presence
    - [X] we went with adding !points as the call but maybe just do any person chatting sends the call
- [ ] add confirmed troll -eric
- [X] [add currency system](#spending-points)
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
    - [ ] make it rain -eric
    - [ ] bubbles -becca
- [ ] ~~recruit #yaylee to do a screamo chorus.~~
- [ ] ability to gift points to others -laszlo
    - [ ] ++ in chat is the way to give points -eric
- [ ] post the Sammi payload (but clean it up first)

### Spending points

- [X] add a field to track currency
- [ ] ~~update form~~ doesn't sync with sdk
- [ ] ? add a field/table to say how much each command costs
- [X] update presence poitns giver to also increment the currency field
- [X] add a !currency command
- [X] update presence points giver to also store everyones score in SAMMI (just update the response in the SRAPI and then store it in a variable on SAMMI)
- [X] update var gr and snap to check against the local score
- [X] send a payload to sn to update currency
- [X] update local score (delete from array)
- [ ] update !currency to just grab from local instead of SRAPI

## BUGS

- [ ] weird delay/wrong person situation with !points
- [X] why does !snap not return to scene
