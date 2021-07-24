const earthTrait = 0
  , ligthingTrait = 1
  , waterTrait = 2
  , fireTrait = 3
  , powerTrait = 4;
let weapons = [];
function selectWeapon(t) {
  let a = weapons[t];
  a.weaponTrait == waterTrait ? $("#weaponWater").prop("checked", !0) : $("#weaponWater").prop("checked", !1),
    a.weaponTrait == earthTrait ? $("#weaponEarth").prop("checked", !0) : $("#weaponEarth").prop("checked", !1),
    a.weaponTrait == fireTrait ? $("#weaponFire").prop("checked", !0) : $("#weaponFire").prop("checked", !1),
    a.weaponTrait == ligthingTrait ? $("#weaponLighting").prop("checked", !0) : $("#weaponLighting").prop("checked", !1),
    a.stat1Trait == waterTrait ? $("#stat1Water").prop("checked", !0) : $("#stat1Water").prop("checked", !1),
    a.stat1Trait == earthTrait ? $("#stat1Earth").prop("checked", !0) : $("#stat1Earth").prop("checked", !1),
    a.stat1Trait == fireTrait ? $("#stat1Fire").prop("checked", !0) : $("#stat1Fire").prop("checked", !1),
    a.stat1Trait == ligthingTrait ? $("#stat1Lighting").prop("checked", !0) : $("#stat1Lighting").prop("checked", !1),
    a.stat1Trait == powerTrait ? $("#stat1Power").prop("checked", !0) : $("#stat1Power").prop("checked", !1),
    a.stat2Trait == waterTrait ? $("#stat2Water").prop("checked", !0) : $("#stat2Water").prop("checked", !1),
    a.stat2Trait == earthTrait ? $("#stat2Earth").prop("checked", !0) : $("#stat2Earth").prop("checked", !1),
    a.stat2Trait == fireTrait ? $("#stat2Fire").prop("checked", !0) : $("#stat2Fire").prop("checked", !1),
    a.stat2Trait == ligthingTrait ? $("#stat2Lighting").prop("checked", !0) : $("#stat2Lighting").prop("checked", !1),
    a.stat2Trait == powerTrait ? $("#stat2Power").prop("checked", !0) : $("#stat2Power").prop("checked", !1),
    a.stat3Trait == waterTrait ? $("#stat3Water").prop("checked", !0) : $("#stat3Water").prop("checked", !1),
    a.stat3Trait == earthTrait ? $("#stat3Earth").prop("checked", !0) : $("#stat3Earth").prop("checked", !1),
    a.stat3Trait == fireTrait ? $("#stat3Fire").prop("checked", !0) : $("#stat3Fire").prop("checked", !1),
    a.stat3Trait == ligthingTrait ? $("#stat3Lighting").prop("checked", !0) : $("#stat3Lighting").prop("checked", !1),
    a.stat3Trait == powerTrait ? $("#stat3Power").prop("checked", !0) : $("#stat3Power").prop("checked", !1),
    $("#weaponPower").val(a.weaponPower),
    $("#stat1").val(a.stat1),
    $("#stat2").val(a.stat2),
    $("#stat3").val(a.stat3)
}
function loadWeapons() {
  $("#saved-weapons").empty();
  let t = getCookie("weapons");
  if (null == t)
    return [];
  let a = t.split("|")
    , e = [];
  for (let t = 0; t < a.length - 1; t++) {
    let i = a[t].split("&");
    e.push({
      weaponTrait: i[0],
      weaponPower: i[1],
      stat1: i[2],
      stat1Trait: i[3],
      stat2: i[4],
      stat2Trait: i[5],
      stat3: i[6],
      stat3Trait: i[7]
    });
    let r = '\n        <div class="col-12 col-md-3">\n            <div class="card mb-3">\n                <div class="card-header bg-info text-center">\n                    <div>' + getHtmlIconByTrait(i[0]) + '</div>\n                </div>\n                <div class="card-body bg-secondary">\n                    <div class="form-group text-center font-weight-bold">\n                        <div class="pb-1"><span>' + i[2] + " " + getHtmlIconByTrait(i[3]) + '</span></div>\n                        <div class="pb-1"><span>' + i[4] + " " + getHtmlIconByTrait(i[5]) + '</span></div>\n                        <div class="pb-1"><span>' + i[6] + " " + getHtmlIconByTrait(i[7]) + '</span></div>\n                        <div class="pb-1"><span>Bonus Power: ' + i[1] + '</span></div>\n                        <div class="col-12 text-center pt-2">\n                            <button id="fight" type="button" class="btn btn-md btn-primary btn-icon-text mr-2 mb-2" onclick="selectWeapon(' + t + ')">Load </button>\n                            <button id="fight" type="button" class="btn btn-md btn-primary btn-icon-text mr-2 mb-2" onclick="removeWeapon(' + t + ')">Delete </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>';
    $("#saved-weapons").append(r)
  }
  return console.log(e),
    e
}
function removeWeapon(t) {
  weapons.splice(t, 1);
  let a = "";
  for (let t = 0; t < weapons.length; t++) {
    const e = weapons[t];
    a = a + (e.weaponTrait + "&" + e.weaponPower + "&" + e.stat1 + "&" + e.stat1Trait + "&" + e.stat2 + "&" + e.stat2Trait + "&" + e.stat3 + "&" + e.stat3Trait) + "|"
  }
  setCookie("weapons", a, 30),
    loadWeapons()
}
function getCookie(t) {
  for (var a = t + "=", e = document.cookie.split(";"), i = 0; i < e.length; i++) {
    for (var r = e[i]; " " == r.charAt(0); )
      r = r.substring(1, r.length);
    if (0 == r.indexOf(a))
      return r.substring(a.length, r.length)
  }
  return null
}
function eraseCookie(t) {
  document.cookie = t + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}
function getHtmlIconByTrait(t) {
  return t == earthTrait ? '<i class="mdi mdi-earth"></i>' : t == waterTrait ? '<i class="mdi mdi-water"></i>' : t == fireTrait ? '<i class="mdi mdi-fire"></i>' : t == ligthingTrait ? '<i class="mdi mdi-weather-lightning"></i>' : t == powerTrait ? '<i class="mdi mdi-sword"></i>' : ""
}
function saveWeapon() {
  try {
    let t = parseInt($("input[name=weaponTrait]:checked").val())
      , a = parseInt($("input[name=stat1Radio]:checked").val())
      , e = parseInt($("input[name=stat2Radio]:checked").val())
      , i = parseInt($("input[name=stat3Radio]:checked").val())
      , r = validateInput($("#weaponPower"))
      , n = validateInput($("#stat1"))
      , o = validateInput($("#stat2"))
      , s = validateInput($("#stat3"));
    if (!existsWeapon(t, r, n, a, o, e, s, i)) {
      weapons.push({
        weaponTrait: t,
        weaponPower: r,
        stat1: n,
        stat1Trait: a,
        stat2: o,
        stat2Trait: e,
        stat3: s,
        stat3Trait: i
      });
      let p = "";
      for (let t = 0; t < weapons.length; t++) {
        const a = weapons[t];
        p = p + (a.weaponTrait + "&" + a.weaponPower + "&" + a.stat1 + "&" + a.stat1Trait + "&" + a.stat2 + "&" + a.stat2Trait + "&" + a.stat3 + "&" + a.stat3Trait) + "|"
      }
      setCookie("weapons", p, 30),
        loadWeapons()
    }
  } catch (t) {
    $("#warning").text("Error in parsing inputs, all stats and powers must be defined.")
  }
}
function existsWeapon(t, a, e, i, r, n, o, s) {
  for (let p = 0; p < weapons.length; p++) {
    const c = weapons[p];
    if (t == c.weaponTrait && a == c.weaponPower && e == c.stat1 && i == c.stat1Trait && r == c.stat2 && n == c.stat2Trait && o == c.stat3 && s == c.stat3Trait)
      return !0
  }
  return !1
}
function setCookie(t, a, e) {
  var i = "";
  if (e) {
    var r = new Date;
    r.setTime(r.getTime() + 24 * e * 60 * 60 * 1e3),
      i = "; expires=" + r.toUTCString()
  }
  document.cookie = t + "=" + (a || "") + i + "; path=/"
}
function validateInput(t) {
  let a = t.val();
  if (!isNaN(parseFloat(a)) && isFinite(a))
    return parseFloat(a);
  throw "Not number"
}
$(document).ready(function() {
  function t(t, a, e) {
    let i = 1;
    var r, n;
    return t == a && (i += .075),
      n = e,
    ((r = t) == fireTrait && n == earthTrait || r == waterTrait && n == fireTrait || r == ligthingTrait && n == waterTrait || r == earthTrait && n == ligthingTrait) && (i += .075),
    function(t, a) {
      return t == fireTrait && a == waterTrait || t == waterTrait && a == ligthingTrait || t == ligthingTrait && a == earthTrait || t == earthTrait && a == fireTrait
    }(t, e) && (i -= .075),
      i
  }
  function a(t, a) {
    return t = Math.ceil(t),
      a = Math.floor(a),
    Math.floor(Math.random() * (a - t + 1)) + t
  }
  $("#cryptoblades-donate").click(function() {
    window.open("https://bscscan.com/address/0xfabdda0ddcffc76b3d80c2dc44224c1f4c45501e", "_blank").focus()
  }),
    $("#save-weapon").click(function() {
      saveWeapon()
    }),
    $("#fight").click(function() {
      try {
        let e = parseInt($("input[name=heroTrait]:checked").val())
          , i = parseInt($("input[name=weaponTrait]:checked").val())
          , r = parseInt($("input[name=stat1Radio]:checked").val())
          , n = parseInt($("input[name=stat2Radio]:checked").val())
          , o = parseInt($("input[name=stat3Radio]:checked").val())
          , s = parseInt($("input[name=enemy1Radio]:checked").val())
          , p = parseInt($("input[name=enemy2Radio]:checked").val())
          , c = parseInt($("input[name=enemy3Radio]:checked").val())
          , d = parseInt($("input[name=enemy4Radio]:checked").val());
        !function(e, i, r, n, o, s, p, c, d, l, h, T, w, u, g, f, v, k) {
          let m, b, I = function(t, a, e, i, r, n, o) {
            let s = 1;
            a > 0 && e >= 0 && (s += e == t ? .0026750000000000003 * a : e == powerTrait ? .002575 * a : .0025 * a);
            i > 0 && r >= 0 && (s += r == t ? .0026750000000000003 * i : r == powerTrait ? .002575 * i : .0025 * i);
            n > 0 && o >= 0 && (s += o == t ? .0026750000000000003 * n : o == powerTrait ? .002575 * n : .0025 * n);
            return s
          }(n, o, s, p, c, d, l), y = e * I + r, x = Math.ceil(h - .1 * h), M = Math.floor(h + .1 * h), W = Math.ceil(y - .1 * y), P = Math.floor(y + .1 * y), F = Math.ceil(w - .1 * w), E = Math.floor(w + .1 * w), C = Math.ceil(y - .1 * y), L = Math.floor(y + .1 * y), R = Math.ceil(g - .1 * g), B = Math.floor(g + .1 * g), H = Math.ceil(y - .1 * y), N = Math.floor(y + .1 * y), D = Math.ceil(v - .1 * v), A = Math.floor(v + .1 * v), G = Math.ceil(y - .1 * y), J = Math.floor(y + .1 * y), O = t(i, n, T), S = t(i, n, u), U = t(i, n, f), _ = t(i, n, k), j = 0, q = 0, z = 0, K = 0;
          for (let t = 0; t < 500; t++)
            m = a(W, P) * O,
              b = a(x, M),
            m >= b && j++,
              m = a(C, L) * S,
              b = a(F, E),
            m >= b && q++,
              m = a(H, N) * U,
              b = a(R, B),
            m >= b && z++,
              m = a(G, J) * _,
              b = a(D, A),
            m >= b && K++;
          $("#enemy1Chance").text((j / 500 * 100).toFixed(2) + " %"),
            $("#enemy2Chance").text((q / 500 * 100).toFixed(2) + " %"),
            $("#enemy3Chance").text((z / 500 * 100).toFixed(2) + " %"),
            $("#enemy4Chance").text((K / 500 * 100).toFixed(2) + " %")
        }(validateInput($("#heroPower")), e, validateInput($("#weaponPower")), i, validateInput($("#stat1")), r, validateInput($("#stat2")), n, validateInput($("#stat3")), o, validateInput($("#enemy1")), s, validateInput($("#enemy2")), p, validateInput($("#enemy3")), c, validateInput($("#enemy4")), d)
      } catch (t) {
        $("#warning").text("Error in parsing inputs, all stats and powers must be defined.")
      }
    })
}),
  window.addEventListener("load", function() {
    weapons = loadWeapons()
  });
