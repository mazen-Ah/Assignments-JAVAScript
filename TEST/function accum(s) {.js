function accum(s) {
  for (i = 0; i <= s.length; i++) {
    s = s.split("");
    console.log(s[i].repeat(s.indexOf(s[i])));
    console.log();
  }
}

accum("ZpglnRxqenU");
