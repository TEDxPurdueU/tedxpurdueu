// provides a link to location on Purdue campus with the hero image's monument

const locationURLs = [
    ['https://www.google.com/maps/place/Engineering+Fountain/@40.4284942,-86.9148402,17.51z/data=!4m5!3m4!1s0x0:0x14933af4b9b35f41!8m2!3d40.428627!4d-86.9137886!6m1!1e1'], // Engineering Fountain
    ['https://www.google.com/maps/@40.4353168,-86.9174828,3a,75y,161h,90t/data=!3m7!1e1!3m5!1sxmZt8c3VZSYa8Q6r7u54Bg!2e0!6s%2F%2Fgeo1.ggpht.com%2Fcbk%3Fpanoid%3DxmZt8c3VZSYa8Q6r7u54Bg%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D392%26h%3D106%26yaw%3D161.3628%26pitch%3D0%26thumbfov%3D100!7i3328!8i1664'], // Anvil Statue
    ['https://www.google.com/maps/@40.4313033,-86.9165845,3a,75y,153.44h,87.79t/data=!3m7!1e1!3m5!1slMViGcUdIc8Cdz1Y0oqXjA!2e0!6s%2F%2Fgeo1.ggpht.com%2Fcbk%3Fpanoid%3DlMViGcUdIc8Cdz1Y0oqXjA%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D392%26h%3D106%26yaw%3D207.43321%26pitch%3D0%26thumbfov%3D100!7i3328!8i1664'], // Purdue Arch
    ['https://www.google.com/maps/@40.4313352,-86.9157395,3a,75y,197.95h,80.73t/data=!3m6!1e1!3m4!1syvw5Zj1sKDK7_WvIVnW6aA!2e0!7i3328!8i1664'], // Neil Armstrong Statue
    ['https://www.google.com/maps/place/John+Purdue+Memorial+Fountain/@40.4252898,-86.9148989,3a,75y,96.24h,78.7t/data=!3m7!1e1!3m5!1sfx37_9MnNk-LkVGtVE7Plw!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3Dfx37_9MnNk-LkVGtVE7Plw%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D94.643005%26pitch%3D0%26thumbfov%3D100!7i3328!8i1664!4m5!3m4!1s0x0:0xa4f37018d5056532!8m2!3d40.4252713!4d-86.9146892!6m1!1e1'], // Memorial Fountain
    ['https://www.google.com/maps/place/Loeb+Fountain/@40.4250061,-86.9158358,3a,75y,310.09h,80.28t/data=!3m8!1e1!3m6!1s-XrEw_O1wr5U%2FV_19SlrnD8I%2FAAAAAAAAHek%2F7WQY-95dykI5rVVzRdxeedrP7z6l-261gCLIB!2e4!3e11!6s%2F%2Flh5.googleusercontent.com%2F-XrEw_O1wr5U%2FV_19SlrnD8I%2FAAAAAAAAHek%2F7WQY-95dykI5rVVzRdxeedrP7z6l-261gCLIB%2Fw203-h100-k-no-pi-0-ya291.18002-ro0-fo100%2F!7i10240!8i3746!4m5!3m4!1s0x0:0x6f9ef0a575cdbc0d!8m2!3d40.4250059!4d-86.9158358!6m1!1e1'], // Loeb Fountain
    ['https://www.google.com/maps/place/Purdue+Theatre/@40.4222176,-86.9137397,3a,75y,88.75h,79.73t/data=!3m7!1e1!3m5!1s5lHhKgaXaJACt_Yh32AkMg!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3D5lHhKgaXaJACt_Yh32AkMg%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D392%26h%3D106%26yaw%3D7.559573%26pitch%3D0%26thumbfov%3D100!7i3328!8i1664!4m5!3m4!1s0x8812e2b03e879b6d:0x96570e5a597603dd!8m2!3d40.422543!4d-86.9129548!6m1!1e1'], // Brickhead Conversations Sculpture
    ['https://www.google.com/maps/place/John+Purdue+Memorial+Fountain/@40.4252898,-86.9148989,3a,75y,96.24h,78.7t/data=!3m7!1e1!3m5!1sfx37_9MnNk-LkVGtVE7Plw!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3Dfx37_9MnNk-LkVGtVE7Plw%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D94.643005%26pitch%3D0%26thumbfov%3D100!7i3328!8i1664!4m5!3m4!1s0x0:0xa4f37018d5056532!8m2!3d40.4252713!4d-86.9146892!6m1!1e1'], // John Purdue's Grave
    ['https://www.google.com/maps/@40.426001,-86.9142007,3a,75y,2.61h,78.39t/data=!3m6!1e1!3m4!1sCJXot9Wko1AhNCDlOhq_Ug!2e0!7i3328!8i1664'], // Lion's Heads
    ['https://www.google.com/maps/@40.4240514,-86.9104656,3a,75y,337.21h,82.15t/data=!3m6!1e1!3m4!1sBBEr331TTBRU2l9-DS7UzQ!2e0!7i3328!8i1664!6m1!1e1'], // Purdue Foundation Stones
    ['https://www.google.com/maps/@40.4275351,-86.9143751,3a,75y,134h,95.85t/data=!3m7!1e1!3m5!1sbVEoE-8KJsRuD7xmyR8a7Q!2e0!6s%2F%2Fgeo1.ggpht.com%2Fcbk%3Fpanoid%3DbVEoE-8KJsRuD7xmyR8a7Q%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D392%26h%3D106%26yaw%3D134.52586%26pitch%3D0%26thumbfov%3D100!7i3328!8i1664'] // Clocktower

]

// on image load, this will run
function purdueLocator(id) {
    $(".mapLocation a").attr('href', locationURLs[id]);
}
