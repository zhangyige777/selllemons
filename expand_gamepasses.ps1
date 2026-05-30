$f = 'd:\广告工具站\Sell Lemons 第二版\src\data\pages.ts'
$c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

# Section 1: Gamepass List
$old1 = "      { heading: 'Gamepass List', content: 'Sell Lemons may offer several gamepasses including: income multiplier passes, speed boost passes, storage expansion passes, VIP access, and automation passes. The exact list and effects may vary between updates.' },"
$new1 = "      { heading: 'Gamepass List', content: 'Sell Lemons may offer several gamepasses that players can purchase with Robux through the Roblox game store. Based on community reports and game analysis, the likely gamepasses include: income multiplier passes that permanently boost your cash earnings, speed boost passes that accelerate selling or production speed, storage expansion passes that increase how many lemons you can hold at once, VIP access passes that grant entry to exclusive areas or content, and automation passes that improve manager or factory efficiency. The exact list of available gamepasses, their pricing in Robux, and their specific effects may vary between game updates. Note that these gamepass details are currently being verified and have not been fully confirmed by the developer.' },"

if ($c.Contains($old1)) {
    $c = $c.Replace($old1, $new1)
    Write-Output "Section 1 (Gamepass List) replaced successfully"
} else {
    Write-Output "ERROR: Section 1 old string not found"
}

# Section 2: Possible Effects
$old2 = "      { heading: 'Possible Effects', content: 'Gamepass effects may include: permanent income multipliers (e.g., 2x cash), faster selling or production speed, increased storage capacity, access to VIP areas, exclusive cosmetics, or improved automation rates.' },"
$new2 = "      { heading: 'Possible Effects', content: 'Each gamepass in Sell Lemons may provide a distinct permanent bonus that enhances your gameplay experience. Income multiplier gamepasses are the most impactful, potentially doubling or even tripling all cash earned from selling lemons, which compounds dramatically when stacked with rebirth and boost multipliers. Speed gamepasses could reduce the time between sales cycles or increase production rates at factories and automated facilities. Storage gamepasses may expand your lemon inventory cap, allowing you to accumulate more product before needing to sell, which is especially useful for offline earnings. VIP access gamepasses might unlock exclusive areas on the map, special NPCs with better deals, or unique cosmetic items for your lemon stand. Automation gamepasses could improve the efficiency of hired managers, increasing their output without additional upgrade costs. These effects are currently being verified and may differ from the final implementation.' },"

if ($c.Contains($old2)) {
    $c = $c.Replace($old2, $new2)
    Write-Output "Section 2 (Possible Effects) replaced successfully"
} else {
    Write-Output "ERROR: Section 2 old string not found"
}

# Section 3: Best Value Passes
$old3 = "      { heading: 'Best Value Passes', content: 'If you plan to spend Robux, prioritize gamepasses that provide permanent income multipliers - these have the best long-term value. Speed and automation passes are also good investments if you play frequently. Cosmetic passes do not affect gameplay.' },"
$new3 = "      { heading: 'Best Value Passes', content: 'If you plan to spend Robux on Sell Lemons, the clear priority should be gamepasses that provide permanent income multipliers. A 2x cash multiplier gamepass, for example, effectively halves the time required to reach every income milestone in the game, making it the single best Robux investment regardless of your stage. Speed and automation passes are strong secondary choices, particularly for players who log in daily and want to maximize each active play session. The key calculation is time saved: if an income multiplier pass costs 200 Robux and you play 50 hours total, you are paying roughly 4 Robux per hour of doubled progress. Storage passes offer decent value primarily for players who rely heavily on offline earnings, since larger storage means more lemons sold passively while away. Cosmetic-only passes should be your lowest priority since they do not affect income or progression in any way.' },"

if ($c.Contains($old3)) {
    $c = $c.Replace($old3, $new3)
    Write-Output "Section 3 (Best Value Passes) replaced successfully"
} else {
    Write-Output "ERROR: Section 3 old string not found"
}

# Section 4: Who Should Buy Gamepasses
$old4 = "      { heading: 'Who Should Buy Gamepasses', content: 'Gamepasses are worth considering if: you play Sell Lemons regularly, you want to speed up progression, or you want to support the game developer. They are not necessary to enjoy or complete the game.' },"
$new4 = "      { heading: 'Who Should Buy Gamepasses', content: 'Gamepasses are worth considering for three types of players. First, dedicated players who log into Sell Lemons daily and plan to invest dozens of hours will get the most value from permanent multiplier passes, since the time savings compound over many play sessions. Second, impatient players who want to skip the slower early-game grinding and jump straight into automation and rebirth mechanics will benefit from speed and income passes that accelerate the first few hours significantly. Third, supporters of the game developer may choose to purchase gamepasses as a way to reward the creator for building an enjoyable free-to-play experience. However, casual players who only play occasionally should think carefully before spending Robux, as the return on investment decreases with fewer play hours. Remember that Sell Lemons is designed to be fully completable without any gamepasses, so there is never any pressure to spend real money.' },"

if ($c.Contains($old4)) {
    $c = $c.Replace($old4, $new4)
    Write-Output "Section 4 (Who Should Buy Gamepasses) replaced successfully"
} else {
    Write-Output "ERROR: Section 4 old string not found"
}

# Section 5: Free Alternative Strategies
$old5 = "      { heading: 'Free Alternative Strategies', content: 'You can achieve similar results without gamepasses by: optimizing upgrade ROI with the calculators on this site, rebirthing at the right time, using boosts strategically, and maximizing offline income. The calculators help you get the most from free gameplay.' },"
$new5 = "      { heading: 'Free Alternative Strategies', content: 'You can achieve competitive progression speeds without spending a single Robux by leveraging the free tools and mechanics available in Sell Lemons. Start by using the Upgrade ROI Calculator on this site before every purchase decision to ensure each upgrade gives the best possible return. Time your rebirths carefully using the Rebirth Calculator so you never waste hours rebuilding income unnecessarily. Activate free boosts during active play sessions rather than right before logging off, and always purchase the best available upgrades before going offline to maximize the 100 percent offline income rate. Stack multipliers from rebirth, alien investors, and temporary boosts to close the gap with gamepass buyers. Many experienced free-to-play players reach endgame content within a reasonable timeframe simply by following optimal upgrade paths and rebirth schedules. The calculators and guides on this site are designed specifically to help free players compete with paying players.' },"

if ($c.Contains($old5)) {
    $c = $c.Replace($old5, $new5)
    Write-Output "Section 5 (Free Alternative Strategies) replaced successfully"
} else {
    Write-Output "ERROR: Section 5 old string not found"
}

# Add 2 more FAQ items (currently 3, need at least 4)
$oldFaq = "      { question: 'Do gamepass multipliers stack with rebirth?', answer: 'Gamepass multipliers are expected to stack multiplicatively with rebirth, boost, and investor multipliers, similar to other multiplier sources.' },"
$newFaq = "      { question: 'Do gamepass multipliers stack with rebirth?', answer: 'Gamepass multipliers are expected to stack multiplicatively with rebirth, boost, and investor multipliers, similar to other multiplier sources.' },`n      { question: 'Which gamepass should I buy first in Sell Lemons?', answer: 'If you are going to buy only one gamepass, choose the permanent income multiplier pass. It provides the biggest long-term benefit by doubling or more all cash earned, which compounds with every rebirth and boost you activate throughout your entire playtime.' },`n      { question: 'Do gamepasses carry over after rebirth and ascend?', answer: 'Yes, gamepasses are purchased with Robux and are permanently tied to your Roblox account. They should persist through all rebirths and ascensions, continuing to provide their bonuses in every new cycle without needing to be repurchased.' },"

if ($c.Contains($oldFaq)) {
    $c = $c.Replace($oldFaq, $newFaq)
    Write-Output "FAQ items added successfully"
} else {
    Write-Output "ERROR: FAQ old string not found"
}

[System.IO.File]::WriteAllText($f, $c, (New-Object System.Text.UTF8Encoding $false))
Write-Output "File saved successfully"
