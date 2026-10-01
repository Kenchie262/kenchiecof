COF SITE - HOVER / GIF / MUSIC VERSION

The Hall of Fame now starts with one centered expanded member card, matching the supplied reference.

HOVER:
- Move the cursor over another member.
- That card expands into the center-style profile.
- Its GIF becomes the blurred page background.
- Its individual music starts.
- The previous member's music stops.
- No clicking is required.

ASSETS:
BACKGROUND GIF OF MEMBERS/ = member background GIFs
PFP OF MEMBERS/ = profile pictures
MUSICS/ = individual member music

IMPORTANT:
Browser-friendly .mp3 copies have been added and are now used by the site. The original .mov files are also retained.


UPDATED CARD SYSTEM
-------------------
Every Hall of Fame card now has an editable DESCRIPTION section.
Descriptions are inside home.html in each .member-description block.

The card animation was rebuilt to make the expansion smoother:
- The selected card expands with a smooth cubic-bezier transition.
- Other cards gently fade/shrink when one is hovered.
- The member GIF, avatar, name, username, and description animate separately.
- The description fades/slides in with a small blur-to-sharp effect.
- Background GIF changes are smoother.
- Clicking a card also starts its music when the browser allows playback.

To change a description:
Find <div class="member-description"> in home.html and edit the <p> text.
