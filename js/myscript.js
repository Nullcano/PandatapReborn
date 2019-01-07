$(document).ready(function(){

    $("#boss").hide();
    var coinLogo = " <img src='img/coin.svg' class='themeicon'> ";
    var amountLogo = "<img src='img/wallet.svg' class='themeicon'> ";
    var bossKilledLogo = "<img src='img/skull.svg' class='themeicon'> ";
    var bossDMGLogo = "<img src='img/sword.svg' class='themeicon'> ";
    var bossSpeedLogo = "<img src='img/speed.svg' class='themeicon'> ";
    var clickMoneyLogo = "<img src='img/pointer.svg' class='themeicon'> ";
    var dragonLogo = "<img src='img/dragon.svg' class='themeicon'> ";
    //making the player class with different game information
    function Player (name, money, totalMoney, moneyPerSec, moneyPerClick,dmg,bonusMon, name){
        this.name = name;
        this.money = money;
        this.totalMoney = totalMoney;
        this.moneyPerSec = moneyPerSec;
        this.moneyPerClick = moneyPerClick;
        this.dmg = dmg;
        this.bonusMon = bonusMon;
    }
    var player = new Player("Hello", 0,0,0,1,1,0);
    //making the boss class
    function Boss (name, hp, timer, kills, maxhp, speed){
        this.name = name;
        this.hp = hp;
        this.timer = timer;
        this.kills = kills;
        this.maxhp = maxhp;
        this.speed = speed;
    }
    var boss = new Boss("",100, 30, 0, 100, 1);
    //making the upgrade class
    function Upgrade (name,timesUpg,cost,income){
        this.name = name;
        this.timesUpg = timesUpg;
        this.cost = cost;
        this.income = income;
    }
    //making the hero upgrade class
    function HeroUpgrade (timesUp, hcost){
        this.timesUp = timesUp;
        this.hcost = hcost;
    }

    //Millionize
    function millionize(input){
    //Million
    if (input < Math.pow(10,3)) {
       return (input)  }
    //Thousands
        else if (input >= Math.pow(10,3) && input < Math.pow(10,6)){
        return (input *Math.pow(10,3) / Math.pow(10,6)).toFixed(2) + " thousand";
    }
    //Million
        else if (input >= Math.pow(10,6) && input < Math.pow(10,9)){
        return (input *Math.pow(10,6) / Math.pow(10,12)).toFixed(2) + " million";
    }
    //Billion
        else if (input >= Math.pow(10,9) && input < Math.pow(10,12)){
        return (input *Math.pow(10,9) / Math.pow(10,18)).toFixed(2) + " billion";
    }
    //Trillion
        else if (input >= Math.pow(10,12) && input < Math.pow(10,15)){
         return (input *Math.pow(10,12) / Math.pow(10,24)).toFixed(2) + " trillion";  }
    //Quadrillion
        else if (input >= Math.pow(10,15) && input < Math.pow(10,18)){
         return (input *Math.pow(10,15) / Math.pow(10,30)).toFixed(2) + " quadrillion";
    }
    //Quintillion
        else if (input >= Math.pow(10,18) && input < Math.pow(10,21)){
         return (input *Math.pow(10,18) / Math.pow(10,36)).toFixed(2) + " quintillion";
    }
    //Sextillion
        else if (input >= Math.pow(10,21) && input < Math.pow(10,24)){
         return (input *Math.pow(10,21) / Math.pow(10,42)).toFixed(2) + " sextillion";
    }
}
    //Millionize Upgrade
    function millionizeUpgrades(input){
    //Million
    if (input < Math.pow(10,3)) {
       return input;}
    //Thousand
        else if (input >= Math.pow(10,3) && input < Math.pow(10,6)){
        return (input *Math.pow(10,3) / Math.pow(10,6)).toFixed(1) + " k";
    }
    //Million
        else if (input >= Math.pow(10,6) && input < Math.pow(10,9)){
        return (input *Math.pow(10,6) / Math.pow(10,12)).toFixed(1) + " m";
    }
    //Billion
        else if (input >= Math.pow(10,9) && input < Math.pow(10,12)){
        return (input *Math.pow(10,9) / Math.pow(10,18)).toFixed(1) + " b";
    }
    //Trillion
        else if (input >= Math.pow(10,12) && input < Math.pow(10,15)){
         return (input *Math.pow(10,12) / Math.pow(10,24)).toFixed(1) + " t";  }
    //Quadrillion
        else if (input >= Math.pow(10,15) && input < Math.pow(10,18)){
         return (input *Math.pow(10,15) / Math.pow(10,30)).toFixed(1) + " qd";
    }
    //Quintillion
        else if (input >= Math.pow(10,18) && input < Math.pow(10,21)){
         return (input *Math.pow(10,18) / Math.pow(10,36)).toFixed(1) + " qt";
    }
    //Sextillion
        else if (input >= Math.pow(10,21) && input < Math.pow(10,24)){
         return (input *Math.pow(10,21) / Math.pow(10,42)).toFixed(1) + " sx";
    }
}


    if (Modernizr.localstorage) {


    //selecting player name
    $("#nameSelectBtn").click(function(){
        var playername = document.getElementById("selectName").value;
        localStorage.setItem("selectedname",playername);
        document.getElementById("playerName").innerHTML = document.getElementById("selectName").value;
    });


    //List of all hero upgrades
    var sword = new HeroUpgrade(0,100);
    var gloryRoad = new HeroUpgrade(0,30000);
    var gf = new HeroUpgrade(0,12000);
    var sensei = new HeroUpgrade(0,1000000);
    var clickbetter = new HeroUpgrade(0,50);
    var clickperc = new HeroUpgrade(0,100000);
    //buy the hero upgrades
    $("#heroUpgrade1").click(function(){
        if (player.money>=sword.hcost){
            player.money=player.money-sword.hcost;
            player.dmg++;
            sword.timesUp++;
            sword.hcost=100*Math.pow(1.20,sword.timesUp);
             if (sword.timesUp > 0){
            var unlocked2 = $("#gloryRoad").prop('disabled', false);
            localStorage.setItem("unlocked2",unlocked2);
            }
        } else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });

          $("#gloryRoad").click(function(){
        if (player.money>=gloryRoad.hcost){
            player.money=player.money-gloryRoad.hcost;
            player.dmg=player.dmg+5;
            gloryRoad.timesUp++;
            gloryRoad.hcost=30000*Math.pow(1.20,gloryRoad.timesUp);

        } else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });
    $("#heroUpgrade2").click(function(){
        if (player.money>=gf.hcost){
            player.money=player.money-gf.hcost;
            boss.timer++;
            gf.timesUp++;
            gf.hcost=12000*Math.pow(1.15, gf.timesUp);
            var $btn = $(this);
            var count = ($btn.data("click_count") || 0) + 1;
            localStorage.setItem("count", count);
            $btn.data("click_count", count);

            if ( gf.timesUp == 10) {
                $btn.unbind("click");
                var locked = $("#heroUpgrade2").prop('disabled', true);
              localStorage.setItem("locked", locked);

                Command: toastr["success"]("You have maxed out this upgrade.")
      //setInterval(function(){
       //   document.getElementById("pricegf").innerHTML = "Maxed";
    // },20);
  }
}else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });
    $("#heroUpgrade3").click(function(){
        if (player.money>=sensei.hcost){
            player.money=player.money-sensei.hcost;
            boss.timer=boss.timer+5;
            sensei.timesUp++;
            sensei.hcost=1000000*Math.pow(1.15,sensei.timesUp);
              var $btn = $(this);
  var count = ($btn.data("click_count") || 0) + 1;
  $btn.data("click_count", count);

  if (sensei.timesUp == 4) {
     $btn.unbind("click");
       var locked = $("#heroUpgrade3").prop('disabled', true );
              localStorage.setItem("locked", locked);
     Command: toastr["success"]("You have maxed out this upgrade.")
  }
  return false;
        }else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });
    $("#heroUpgrade4").click(function(){
        if (player.money>=clickbetter.hcost){
            player.money=player.money-clickbetter.hcost;
            clickbetter.timesUp++;


            clickbetter.hcost=50*Math.pow(1.10,clickbetter.timesUp);
             if (clickbetter.timesUp > 0){
            var unlocked2 = $("#heroUpgrade5, .statback10").show();
            var unlocked2 = $("#heroUpgrade5").prop('disabled', false);
            localStorage.setItem("unlocked2",unlocked2);
            }
        }else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });
    $("#heroUpgrade5").click(function(){
        if (player.money>=clickperc.hcost){
            player.money=player.money-clickperc.hcost;
            clickperc.timesUp++;


        }else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });
    setInterval(function(){

         player.moneyPerClick=(1+clickbetter.timesUp)+(player.moneyPerSec*0.01*clickperc.timesUp);

            clickperc.hcost=100000*Math.pow(1.15,clickperc.timesUp);

        document.getElementById("priceSword").innerHTML = coinLogo + millionizeUpgrades(sword.hcost.toFixed(0));
        document.getElementById("heroUpgrade1Amount").innerHTML = amountLogo + sword.timesUp.toFixed(0);
            document.getElementById("priceGloryRoad").innerHTML = coinLogo + millionizeUpgrades(gloryRoad.hcost.toFixed(0));
        document.getElementById("gloryRoadAmount").innerHTML = amountLogo + gloryRoad.timesUp.toFixed(0);

        if (gf.timesUp >= 10) {
            document.getElementById("pricegf").innerHTML = "Maxed";

        } else {
        document.getElementById("pricegf").innerHTML = coinLogo + millionizeUpgrades(gf.hcost.toFixed(0));
        }
        document.getElementById("heroUpgrade2Amount").innerHTML = amountLogo + gf.timesUp.toFixed(0);

        if (sensei.timesUp >= 4) {
            document.getElementById("pricesensei").innerHTML = "Maxed";

        } else {
        document.getElementById("pricesensei").innerHTML = coinLogo + millionizeUpgrades(sensei.hcost.toFixed(0));
        }
        document.getElementById("heroUpgrade3Amount").innerHTML = amountLogo + sensei.timesUp.toFixed(0);

        document.getElementById("priceClick").innerHTML = coinLogo + millionizeUpgrades(clickbetter.hcost.toFixed(0));
        document.getElementById("heroUpgrade4Amount").innerHTML = amountLogo + clickbetter.timesUp.toFixed(0);
        document.getElementById("priceClickPerc").innerHTML = coinLogo + millionizeUpgrades(clickperc.hcost.toFixed(0));
        document.getElementById("heroUpgrade5Amount").innerHTML = amountLogo + clickperc.timesUp.toFixed(0);

         if (boss.kills >= 10 && boss.kills < 20){
         $(".bossSprite").css("background", "url(img/dragon2.gif) no-repeat");
         $(".bossSprite").css("background-size", "12vw 22vh");
        boss.name = "Teovanth The Brave";
        } else if (boss.kills >= 20 && boss.kills < 30){
         $(".bossSprite").css("background", "url(img/tiger.gif) no-repeat");
         $(".bossSprite").css("background-size", "12vw 22vh");
        boss.name = "Barroth The Fast One";
        } else if (boss.kills >= 30 && boss.kills < 40){
         $(".bossSprite").css("background", "url(img/bear.png) no-repeat");
         $(".bossSprite").css("background-size", "12vw 22vh");
        boss.name = "Soreth The Powerful One"
        }


        },20);
  $("#makeMon").click(function(e){
        player.money=player.money+player.moneyPerClick;
        player.totalMoney=player.totalMoney+player.moneyPerClick;



        var money =  millionizeUpgrades(player.moneyPerClick.toFixed(0));
        var obj = $("#displayNum").clone();
    $("body").append(obj);
    obj.html("+"+money);
    obj.css('position','absolute');
	obj.offset({left: e.pageX-10, top: e.pageY-55});
    obj.animate({"top": "-=55px"}, 100, "linear", function() {
		$(this).remove();
        });

    });
      $("#makeMon, #boss").keydown(function(event){
        if (event.keyCode == 13 || event.keyCode == 32 || event.charCode == 32) {
            return false;
        }
    });

    //list all upgrade classes set with; name, how many times upgraded, set at 0, the base cost and the income


    var lazyPanda = new Upgrade("Lazy panda", 0,15,0);
    var workingPanda = new Upgrade("Working panda", 0,100,0);
    var riceFarm = new Upgrade("Rice farm", 0,1100,0);
    var riceLab = new Upgrade("Rice Lab", 0, 12000, 0);
    var riceFactory = new Upgrade("Rice Factory", 0, 130000, 0);
    var riceBank = new Upgrade("Rice Bank", 0, 1400000, 0);
    var pandaTemple = new Upgrade("Panda Temple", 0, 20000000, 0);
    var wizardPanda = new Upgrade("Wizard Panda", 0, 330000000, 0);
    var alchemyPanda = new Upgrade("Alchemy Panda", 0, 7.5*(Math.pow(10, 10)),0);
    var bambooForest = new Upgrade("Bamboo Forest", 0, Math.pow(10,12), 0);
    var researchFacility = new Upgrade("Reasearch Facility", 0, 14*(Math.pow(10,12)), 0);
    var pandaSchool = new Upgrade("Panda School", 0, 1.7*(Math.pow(10,14)), 0);
    var ninjaPanda = new Upgrade("Ninja Panda", 0, 2.1*(Math.pow(10,15)), 0);
    boss.name = "Carinth The Champion";
    //the loop that creates game tics and increase the money every fifth of a sec
    setInterval(function(){
        if (boss.kills%10==0){
            player.bonusMon=boss.kills/10;
        }
        else {
            player.bonusMon=Math.floor(boss.kills/10);
        }
        player.money = player.money + (lazyPanda.income + workingPanda.income + riceFarm.income + riceLab.income + riceFactory.income + riceBank.income + pandaTemple.income + wizardPanda.income + alchemyPanda.income + bambooForest.income + researchFacility.income + pandaSchool.income + ninjaPanda.income)*Math.pow(1.01,player.bonusMon);

        player.totalMoney = player.totalMoney + lazyPanda.income +workingPanda.income + riceFarm.income + riceLab.income + riceFactory.income + riceBank.income + pandaTemple.income + wizardPanda.income + alchemyPanda.income + bambooForest.income + researchFacility.income + pandaSchool.income + ninjaPanda.income;

        boss.speed = millionizeUpgrades(boss.kills * 0.015 + 1).toFixed(1);

        player.moneyPerSec = 50*(lazyPanda.income+ workingPanda.income + riceFarm.income + riceLab.income + riceFactory.income + riceBank.income + pandaTemple.income + wizardPanda.income + alchemyPanda.income + bambooForest.income + researchFacility.income + pandaSchool.income + ninjaPanda.income)*Math.pow(1.01, player.bonusMon);
        // Income and money info
        document.getElementById("incomePerSec").innerHTML = "Income: " + millionize(player.moneyPerSec.toFixed(2)) + coinLogo ;
        document.getElementById("monDisp").innerHTML = millionize(player.money.toFixed(2)) + coinLogo;

        //document.getElementById("bossHP").innerHTML = boss.hp.toFixed(0);
                }, 20);
    //the click button




    //the list with all upgrades you can buy
   $("#buyNinjaPanda, #buyPandaSchool, #buyResearchFacility, #buyBambooForest, #buyAlchemyPanda, #buyWizardPanda, #buyPandaTemple, #buyRiceBank").hide();
    $(".statback2, .statback3, .statback4, .statback5, .statback6, .statback7, .statback8, .statback9").hide();


   $("#buyLazyPanda").click(function(){
        if (player.money>=lazyPanda.cost){
            player.money=player.money-lazyPanda.cost;
            lazyPanda.timesUpg++;
            lazyPanda.income=lazyPanda.income+0.002;
            lazyPanda.cost=lazyPanda.cost*1.15;
        } else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });

            setInterval(function(){
            if (lazyPanda.timesUpg > 0){
            var unlocked = $("#buyWorkingPanda").prop('disabled', false);
            localStorage.setItem("unlocked",unlocked);
            }

            document.getElementById("lazyPandaAmount").innerHTML = amountLogo + lazyPanda.timesUpg;
            document.getElementById("priceLazyPanda").innerHTML = coinLogo + millionizeUpgrades(lazyPanda.cost.toFixed(0));
            },20);

    $("#buyWorkingPanda").click(function(){
        if (player.money>=workingPanda.cost){
            player.money=player.money-workingPanda.cost;
            workingPanda.timesUpg++;
            workingPanda.income=workingPanda.income+0.02;
            workingPanda.cost=workingPanda.cost*1.15;
        } else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });

        setInterval(function(){
            if (workingPanda.timesUpg > 0){
              $(".dimmed").hide();
              var unlocked = $("#buyRiceFarm").prop('disabled', false);
              localStorage.setItem("unlocked", unlocked);
            }
             document.getElementById("workingPandaAmount").innerHTML = amountLogo + workingPanda.timesUpg;
            document.getElementById("priceWorkingPanda").innerHTML = coinLogo +  millionizeUpgrades(workingPanda.cost.toFixed(0));

        },20);

    $("#buyRiceFarm").click(function(){
        if (player.money>=riceFarm.cost){
            player.money=player.money-riceFarm.cost;
            riceFarm.timesUpg++;
            riceFarm.income=riceFarm.income+0.16;
            riceFarm.cost=riceFarm.cost*1.15;
        } else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });
        setInterval(function(){
            if (riceFarm.timesUpg > 0){
              var unlocked = $("#buyRiceLab").prop('disabled', false);
              localStorage.setItem("unlocked", unlocked);
            }
             document.getElementById("riceFarmAmount").innerHTML = amountLogo + riceFarm.timesUpg;
            document.getElementById("priceRiceFarm").innerHTML = coinLogo + millionizeUpgrades(riceFarm.cost.toFixed(0));
        },20);

     $("#buyRiceLab").click(function(){
        if (player.money>=riceLab.cost){
            player.money=player.money-riceLab.cost;
            riceLab.timesUpg++;
            riceLab.income=riceLab.income+0.94;
            riceLab.cost=riceLab.cost*1.15;

        } else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });
        setInterval(function(){
             if (riceLab.timesUpg > 0){
              var unlocked = $("#buyRiceBank, .statback2").show();
              var unlocked = $("#buyRiceFactory").prop('disabled', false);
              localStorage.setItem("unlocked", unlocked);
            }
             document.getElementById("riceLabAmount").innerHTML = amountLogo + riceLab.timesUpg;
            document.getElementById("priceRiceLab").innerHTML = coinLogo + millionizeUpgrades(riceLab.cost.toFixed(0));
        },20);

        $("#buyRiceFactory").click(function(){
        if (player.money>=riceFactory.cost){
            player.money=player.money-riceFactory.cost;
            riceFactory.timesUpg++;
            riceFactory.income=riceFactory.income+5.2;
            riceFactory.cost=riceFactory.cost*1.15;

        } else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });
        setInterval(function(){
              if (riceFactory.timesUpg > 0){
              var unlocked = $("#buyPandaTemple, .statback3").show();
              var unlocked = $("#buyRiceBank").prop('disabled', false);
              localStorage.setItem("unlocked", unlocked);
            }
             document.getElementById("riceFactoryAmount").innerHTML = amountLogo + riceFactory.timesUpg;
            document.getElementById("priceRiceFactory").innerHTML = coinLogo + millionizeUpgrades(riceFactory.cost.toFixed(0));
        },20);

           $("#buyRiceBank").click(function(){
        if (player.money>=riceBank.cost){
            player.money=player.money-riceBank.cost;
            riceBank.timesUpg++;
            riceBank.income=riceBank.income+28;
            riceBank.cost=riceBank.cost*1.15;

        } else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });
        setInterval(function(){
              if (riceBank.timesUpg > 0){
              var unlocked =  $("#buyWizardPanda, .statback4").show();
              var unlocked = $("#buyPandaTemple").prop('disabled', false);
              localStorage.setItem("unlocked", unlocked);
            }
             document.getElementById("riceBankAmount").innerHTML = amountLogo + riceBank.timesUpg;
            document.getElementById("priceRiceBank").innerHTML = coinLogo + millionizeUpgrades(riceBank.cost.toFixed(0));
        },20);

          $("#buyPandaTemple").click(function(){
        if (player.money>=pandaTemple.cost){
            player.money=player.money-pandaTemple.cost;
            pandaTemple.timesUpg++;
            pandaTemple.income=pandaTemple.income+156;
            pandaTemple.cost=pandaTemple.cost*1.15;

        } else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });
        setInterval(function(){
              if (pandaTemple.timesUpg > 0){
              var unlocked = $("#buyAlchemyPanda, .statback5").show();
              var unlocked = $("#buyWizardPanda").prop('disabled', false);
              localStorage.setItem("unlocked", unlocked);
            }
             document.getElementById("pandaTempleAmount").innerHTML = amountLogo + pandaTemple.timesUpg;
            document.getElementById("pricePandaTemple").innerHTML = coinLogo + millionizeUpgrades(pandaTemple.cost.toFixed(0));
        },20);

           $("#buyWizardPanda").click(function(){
        if (player.money>=wizardPanda.cost){
            player.money=player.money-wizardPanda.cost;
            wizardPanda.timesUpg++;
            wizardPanda.income=wizardPanda.income+880;
            wizardPanda.cost=wizardPanda.cost*1.15;

        } else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });
        setInterval(function(){
              if (wizardPanda.timesUpg > 0){
              var unlocked =  $("#buyBambooForest, .statback6").show();
              var unlocked = $("#buyAlchemyPanda").prop('disabled', false);
              localStorage.setItem("unlocked", unlocked);
            }
             document.getElementById("wizardPandaAmount").innerHTML = amountLogo + wizardPanda.timesUpg;
            document.getElementById("priceWizardPanda").innerHTML = coinLogo + millionizeUpgrades(wizardPanda.cost.toFixed(0));
        },20);


            $("#buyAlchemyPanda").click(function(){
        if (player.money>=alchemyPanda.cost){
            player.money=player.money-alchemyPanda.cost;
            alchemyPanda.timesUpg++;
            alchemyPanda.income=alchemyPanda.income+32000;
            alchemyPanda.cost=alchemyPanda.cost*1.15;

        } else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });
        setInterval(function(){
              if (alchemyPanda.timesUpg > 0){
              var unlocked = $("#buyResearchFacility, .statback7").show();
              var unlocked = $("#buyBambooForest").prop('disabled', false);
              localStorage.setItem("unlocked", unlocked);
            }
             document.getElementById("alchemyPandaAmount").innerHTML = amountLogo + alchemyPanda.timesUpg;
            document.getElementById("priceAlchemyPanda").innerHTML = coinLogo + millionizeUpgrades(alchemyPanda.cost.toFixed(0));
        },20);

              $("#buyBambooForest").click(function(){
        if (player.money>=bambooForest.cost){
            player.money=player.money-bambooForest.cost;
            bambooForest.timesUpg++;
            bambooForest.income=bambooForest.income+200000;
            bambooForest.cost=bambooForest.cost*1.15;

        } else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });
        setInterval(function(){
              if (bambooForest.timesUpg > 0){
              var unlocked =  $("#buyPandaSchool, .statback8").show();
              var unlocked = $("#buyResearchFacility").prop('disabled', false);
              localStorage.setItem("unlocked", unlocked);
            }
             document.getElementById("bambooForestAmount").innerHTML = amountLogo + bambooForest.timesUpg;
            document.getElementById("priceBambooForest").innerHTML = coinLogo + millionizeUpgrades(bambooForest.cost.toFixed(0));
        },20);


              $("#buyResearchFacility").click(function(){
        if (player.money>=researchFacility.cost){
            player.money=player.money-researchFacility.cost;
            researchFacility.timesUpg++;
            researchFacility.income=researchFacility.income+1300000;
            researchFacility.cost=researchFacility.cost*1.15;

        } else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });
        setInterval(function(){
              if (researchFacility.timesUpg > 0){
              var unlocked = $("#buyPandaSchool").prop('disabled', false);
              localStorage.setItem("unlocked", unlocked);
              var unlocked = $("#buyNinjaPanda, .statback9").show();
            }
             document.getElementById("researchFacilityAmount").innerHTML = amountLogo + researchFacility.timesUpg;
            document.getElementById("priceResearchFacility").innerHTML = coinLogo + millionizeUpgrades(researchFacility.cost.toFixed(0));
        },20);

           $("#buyPandaSchool").click(function(){
        if (player.money>=pandaSchool.cost){
            player.money=player.money-pandaSchool.cost;
            pandaSchool.timesUpg++;
            pandaSchool.income=pandaSchool.income+8600000;
            pandaSchool.cost=pandaSchool.cost*1.15;
        } else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });
        setInterval(function(){
              if (pandaSchool.timesUpg > 0){
              var unlocked = $("#buyNinjaPanda").prop('disabled', false);
              localStorage.setItem("unlocked", unlocked);
            }
             document.getElementById("pandaSchoolAmount").innerHTML = amountLogo + pandaSchool.timesUpg;
            document.getElementById("pricePandaSchool").innerHTML = coinLogo + millionizeUpgrades(pandaSchool.cost.toFixed(0));
        },20);

          $("#buyNinjaPanda").click(function(){
        if (player.money>=ninjaPanda.cost){
            player.money=player.money-ninjaPanda.cost;
            ninjaPanda.timesUpg++;
            ninjaPanda.income=ninjaPanda.income+58000000;
            ninjaPanda.cost=ninjaPanda.cost*1.15;
        } else {
              Command: toastr["warning"]("You don't have enough.")
        }
    });
        setInterval(function(){
             document.getElementById("ninjaPandaAmount").innerHTML = amountLogo + ninjaPanda.timesUpg;
            document.getElementById("priceNinjaPanda").innerHTML = coinLogo + millionizeUpgrades(ninjaPanda.cost.toFixed(0));
        },20);


    //The boss fight
    var bossTimerInterval;
    $("#startBF").click(function(){
        $("#bossFight").hide();
        $("#boss").show();

       $("#heroUpgrade2").prop('disabled', true);
     $("#heroUpgrade3").prop('disabled', true);
        bossTimerInterval = setInterval(function(){
            boss.timer = boss.timer - 1;
            if (boss.timer<=0){
                $("#bossFight").show();
                $("#boss").hide();
                clearInterval(bossTimerInterval);
                boss.hp = 100*Math.pow(1.15,boss.kills);
                boss.timer = 30+gf.timesUp+(5*sensei.timesUp);
                clearInterval(bossTimerInterval);
                    if (gf.timesUp < 10){
                $("#heroUpgrade2").prop('disabled', false);
                }
                if (sensei.timesUp < 4){
                $("#heroUpgrade3").prop('disabled', false);
                }

                }

        }, 1000);
    });
    //The boss killing mechanism
    $("#boss").click(function(){
        boss.hp = boss.hp - player.dmg;

        if(boss.hp<=0){
            boss.kills++;
            boss.hp = 100*Math.pow(1.15,boss.kills);
            boss.maxhp = 100*Math.pow(1.15,boss.kills);
            $("#bossFight").show();
            $("#boss").hide();
            boss.timer = 30+gf.timesUp+(5*sensei.timesUp);
            clearInterval(bossTimerInterval);
            $("#CountDownTimer").TimeCircles().stop();
            Command: toastr["success"]("You have defeated the boss.")
            if (gf.timesUp < 10){
                $("#heroUpgrade2").prop('disabled', false);
            }
            if (sensei.timesUp < 4){
                $("#heroUpgrade3").prop('disabled', false);
            }
            if (boss.kills < 15) {
                 player.money=player.money+30*player.moneyPerSec;
            } else {
            player.money=player.money+60*player.moneyPerSec;
            }
        }

    });

    //BOSS PROGRESS BAR


function attack(){

    $("#boss").click(function(){
	    var totalDamage = player.dmg;

		$("#total").val(totalDamage);
			var currhp = parseInt($("#HPBar").attr("aria-valuenow"));
			var maxhp = parseInt($("#HPBar").attr("aria-valuemax"));

			var newhp = currhp - totalDamage;
			if (newhp > maxhp){
				newhp = maxhp;
			}
			if (newhp < 0){
				newhp = 0;
			}
            if (currhp == 0){

            }

});
}

           attack();
     setInterval(function(){
            $("#HPBar").attr("aria-valuenow", boss.hp);
         	$("#HPNum").html(millionizeUpgrades(boss.hp.toFixed(0)) + "/" + millionizeUpgrades(boss.maxhp.toFixed(0)))
            var perc = (boss.hp/boss.maxhp)*100;
            $("#HPBar").css("width", perc + "%");
         if (perc <= 25){
				$("#HPBar").removeClass("progress-bar-success progress-bar-warning");
				$("#HPBar").addClass("progress-bar-danger");
			}else if (perc <=50){
				$("#HPBar").removeClass("progress-bar-success progress-bar-danger");
				$("#HPBar").addClass("progress-bar-warning");
			}else{
				$("#HPBar").addClass("progress-bar-success");
				$("#HPBar").removeClass("progress-bar-warning progress-bar-danger");
			}
          },20);

//TIMER
       $("#CountDownTimer").TimeCircles({

    "start": false,
    "total_duration": 60,
    "count_past_zero": false,
    "animation": "tick",
    "bg_width": 1.2,
    "fg_width": 0.15,
    "circle_bg_color": "#0B476B",

    "time": {
        "Days": {
            "text": "Days",
            "color": "#FFCC66",
            "show": false
        },
        "Hours": {
            "text": "Hours",
            "color": "#99CCFF",
            "show": false
        },
        "Minutes": {
            "text": "Minutes",
            "color": "#BBFFBB",
            "show": false
        },
        "Seconds": {
            "text": "",
            "color": "#99CCFF",
            "show": true
        }
    }
});
$("#startBF").click(function(){
 $('#CountDownTimer').data('timer', boss.timer).TimeCircles().restart();
});
// Don't work. Check here

        // Toast when fail

$("#CountDownTimer").TimeCircles().addListener(function(unit, amount, total){
if(total == 0) {
Command: toastr["error"]("You failed to beat the boss in time.", "Failed")
}
});

$("#save").click(function(){
    Command: toastr["success"]("You have successfully saved the game.")
});
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "4000",
  "extendedTimeOut": "2000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

function makeNewPosition(){
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(".boss").height() -190;
    var w = $(".boss").width() -190 ;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.bossSprite').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('.bossSprite').animate({ bottom: newq[0], right: newq[1] }, speed, function(){
      animateDiv();
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = boss.speed;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;
}
$("#startBF").click(function(){
     animateDiv();
});
 //Change boss

    // Stats
    setInterval(function(){
          // Boss info
        document.getElementById("bossKills").innerHTML = bossKilledLogo +  boss.kills;
        document.getElementById("bossSpeed").innerHTML = bossSpeedLogo + boss.speed;
        document.getElementById("bossDMG").innerHTML = bossDMGLogo +  millionizeUpgrades(player.dmg).toFixed(0);
        document.getElementById("clickMoney").innerHTML = clickMoneyLogo +  millionizeUpgrades(player.moneyPerClick.toFixed(0));
        document.getElementById("bonusIncome").innerHTML = dragonLogo +  millionizeUpgrades(player.bonusMon).toFixed(0) + "%";
        document.getElementById("bossName").innerHTML = boss.name ;
    },20);


    // HARD RESET SAVE
    $("#hardReset").click(function(){
        localStorage.clear();
    });


        $("#save").click(function(){
   var save = {
    //PLAYER
    money: player.money,
    dmg: player.dmg,
    monClick: player.moneyPerClick,
    //Income
    moneyPerSec: player.moneyPerSec,
    //Lazy Panda
    lazyIncome: lazyPanda.income,
    lazyCost: lazyPanda.cost,
    lazyUpg: lazyPanda.timesUpg,
    //Working Panda
    workingIncome: workingPanda.income,
    workingCost: workingPanda.cost,
    workingUpg: workingPanda.timesUpg,
    //Rice Farm
    riceIncome: riceFarm.income,
    riceCost: riceFarm.cost,
    riceUpg: riceFarm.timesUpg,
    // Rice Lab
    riceLabIncome: riceLab.income,
    riceLabCost: riceLab.cost,
    riceLabUpg: riceLab.timesUpg,
      // Rice Factory
    riceFactoryIncome: riceFactory.income,
    riceFactoryCost: riceFactory.cost,
    riceFactoryUpg: riceFactory.timesUpg,
      // Rice Bank
    riceBankIncome: riceBank.income,
    riceBankCost: riceBank.cost,
    riceBankUpg: riceBank.timesUpg,
      // Panda Temple
    pandaTempleIncome: pandaTemple.income,
    pandaTempleCost: pandaTemple.cost,
    pandaTempleUpg: pandaTemple.timesUpg,
      // Wizard Panda
    wizardPandaIncome: wizardPanda.income,
    wizardPandaCost: wizardPanda.cost,
    wizardPandaUpg: wizardPanda.timesUpg,
      // Alchemy Panda
    alchemyPandaIncome: alchemyPanda.income,
    alchemyPandaCost: alchemyPanda.cost,
    alchemyPandaUpg: alchemyPanda.timesUpg,
       // Bamboo Forest
    bambooForestIncome: bambooForest.income,
    bambooForestCost: bambooForest.cost,
    bambooForestUpg: bambooForest.timesUpg,
       // Research Facility
    researchFacilityIncome: researchFacility.income,
    researchFacilityCost: researchFacility.cost,
    researchFacilityUpg: researchFacility.timesUpg,
       // Panda School
    pandaSchoolIncome: pandaSchool.income,
    pandaSchoolCost: pandaSchool.cost,
    pandaSchoolUpg: pandaSchool.timesUpg,
       // Ninje Panda
    ninjaPandaIncome: ninjaPanda.income,
    ninjaPandaCost: ninjaPanda.cost,
    ninjaPandaUpg: ninjaPanda.timesUpg,
       // Hero upgrades!
       // Hero upgrades 1
    swordCost: sword.hcost,
    swordUpg: sword.timesUp,
    // Glory Road
    gloryRoadCost: gloryRoad.hcost,
    gloryRoadUpg: gloryRoad.timesUp,
    // Hero upgrade 2
    gfCost: gf.hcost,
    gfUpg: gf.timesUp,
    //Hero upgrade 3
    senseiCost: sensei.hcost,
    senseiUpg: sensei.timesUp,
     //Hero upgrade 4
    clickbetterCost: clickbetter.hcost,
    clickbetterUpg: clickbetter.timesUp,
     //Hero upgrade 5
    clickpercCost: clickperc.hcost,
    clickpercUpg: clickperc.timesUp,

    name: player.name,
    upgrade: Upgrade.income,
    //Boss
    bossHp: boss.hp,
    bossMaxHp: boss.maxhp,
    bossTimer: boss.timer,
    bossKills: boss.kills,
    bossPerc: boss.perc,
   }


localStorage.setItem("save",JSON.stringify(save));
  var scrollPosition = $(".scroll").scrollTop();
      localStorage.setItem("scrollPosition", scrollPosition);

  var scrollPosition2 = $(".scroll2").scrollTop();
      localStorage.setItem("scrollPosition2", scrollPosition2);

});
    setInterval(function(){
    var save = {
    //PLAYER
    money: player.money,
    dmg: player.dmg,
    monClick: player.moneyPerClick,
    //Income
    moneyPerSec: player.moneyPerSec,
    //Lazy Panda
    lazyIncome: lazyPanda.income,
    lazyCost: lazyPanda.cost,
    lazyUpg: lazyPanda.timesUpg,
    //Working Panda
    workingIncome: workingPanda.income,
    workingCost: workingPanda.cost,
    workingUpg: workingPanda.timesUpg,
    //Rice Farm
    riceIncome: riceFarm.income,
    riceCost: riceFarm.cost,
    riceUpg: riceFarm.timesUpg,
    // Rice Lab
    riceLabIncome: riceLab.income,
    riceLabCost: riceLab.cost,
    riceLabUpg: riceLab.timesUpg,
      // Rice Factory
    riceFactoryIncome: riceFactory.income,
    riceFactoryCost: riceFactory.cost,
    riceFactoryUpg: riceFactory.timesUpg,
      // Rice Bank
    riceBankIncome: riceBank.income,
    riceBankCost: riceBank.cost,
    riceBankUpg: riceBank.timesUpg,
      // Panda Temple
    pandaTempleIncome: pandaTemple.income,
    pandaTempleCost: pandaTemple.cost,
    pandaTempleUpg: pandaTemple.timesUpg,
      // Wizard Panda
    wizardPandaIncome: wizardPanda.income,
    wizardPandaCost: wizardPanda.cost,
    wizardPandaUpg: wizardPanda.timesUpg,
      // Alchemy Panda
    alchemyPandaIncome: alchemyPanda.income,
    alchemyPandaCost: alchemyPanda.cost,
    alchemyPandaUpg: alchemyPanda.timesUpg,
       // Bamboo Forest
    bambooForestIncome: bambooForest.income,
    bambooForestCost: bambooForest.cost,
    bambooForestUpg: bambooForest.timesUpg,
       // Research Facility
    researchFacilityIncome: researchFacility.income,
    researchFacilityCost: researchFacility.cost,
    researchFacilityUpg: researchFacility.timesUpg,
       // Panda School
    pandaSchoolIncome: pandaSchool.income,
    pandaSchoolCost: pandaSchool.cost,
    pandaSchoolUpg: pandaSchool.timesUpg,
       // Ninje Panda
    ninjaPandaIncome: ninjaPanda.income,
    ninjaPandaCost: ninjaPanda.cost,
    ninjaPandaUpg: ninjaPanda.timesUpg,
       // Hero upgrades!
       // Hero upgrades 1
    swordCost: sword.hcost,
    swordUpg: sword.timesUp,
    // Glory Road
    gloryRoadCost: gloryRoad.hcost,
    gloryRoadUpg: gloryRoad.timesUp,
    // Hero upgrade 2
    gfCost: gf.hcost,
    gfUpg: gf.timesUp,
    //Hero upgrade 3
    senseiCost: sensei.hcost,
    senseiUpg: sensei.timesUp,
     //Hero upgrade 4
    clickbetterCost: clickbetter.hcost,
    clickbetterUpg: clickbetter.timesUp,
     //Hero upgrade 5
    clickpercCost: clickperc.hcost,
    clickpercUpg: clickperc.timesUp,

    name: player.name,
    upgrade: Upgrade.income,
    //Boss
    bossHp: boss.hp,
    bossMaxHp: boss.maxhp,
    bossTimer: boss.timer,
    bossKills: boss.kills,
    bossPerc: boss.perc,
    }


localStorage.setItem("save",JSON.stringify(save));
 },60000);


window.onload = function (){

var savegame = JSON.parse(localStorage.getItem("save"));
//player
if (typeof savegame.dmg !== "undefined") player.dmg = savegame.dmg;
if (typeof savegame.money !== "undefined") player.money = savegame.money;
if (typeof savegame.monClick !== "undefined") player.moneyPerClick = savegame.monClick;
//Income
if (typeof savegame.moneyPerSec !== "undefined") player.moneyPerSec = savegame.moneyPerSec;
//Lazy Panda
if (typeof savegame.lazyIncome !== "undefined") lazyPanda.income = savegame.lazyIncome;
if (typeof savegame.lazyCost !== "undefined") lazyPanda.cost = savegame.lazyCost;
if (typeof savegame.lazyUpg !== "undefined") lazyPanda.timesUpg = savegame.lazyUpg;
//Working Panda
if (typeof savegame.workingIncome !== "undefined") workingPanda.income = savegame.workingIncome;
if (typeof savegame.workingCost !== "undefined") workingPanda.cost = savegame.workingCost;
if (typeof savegame.workingUpg !== "undefined") workingPanda.timesUpg = savegame.workingUpg;
//Rice Farm
if (typeof savegame.riceCost !== "undefined") riceFarm.cost = savegame.riceCost;
if (typeof savegame.riceIncome !== "undefined") riceFarm.income = savegame.riceIncome;
if (typeof savegame.riceUpg !== "undefined") riceFarm.timesUpg = savegame.riceUpg;
// Rice Lab
if (typeof savegame.riceLabCost !== "undefined") riceLab.cost = savegame.riceLabCost;
if (typeof savegame.riceLabIncome !== "undefined") riceLab.income = savegame.riceLabIncome;
if (typeof savegame.riceLabUpg !== "undefined") riceLab.timesUpg = savegame.riceLabUpg;
// Rice Factory
if (typeof savegame.riceFactoryCost !== "undefined") riceFactory.cost = savegame.riceFactoryCost;
if (typeof savegame.riceFactoryIncome !== "undefined") riceFactory.income = savegame.riceFactoryIncome;
if (typeof savegame.riceFactoryUpg !== "undefined") riceFactory.timesUpg = savegame.riceFactoryUpg;
// Rice Bank
if (typeof savegame.riceBankCost !== "undefined") riceBank.cost = savegame.riceBankCost;
if (typeof savegame.riceBankIncome !== "undefined") riceBank.income = savegame.riceBankIncome;
if (typeof savegame.riceBankUpg !== "undefined") riceBank.timesUpg = savegame.riceBankUpg;
// Panda Temple
if (typeof savegame.pandaTempleCost !== "undefined") pandaTemple.cost = savegame.pandaTempleCost;
if (typeof savegame.pandaTempleIncome !== "undefined") pandaTemple.income = savegame.pandaTempleIncome;
if (typeof savegame.pandaTempleUpg !== "undefined") pandaTemple.timesUpg = savegame.pandaTempleUpg;
// Wizard Panda
if (typeof savegame.wizardPandaCost !== "undefined") wizardPanda.cost = savegame.wizardPandaCost;
if (typeof savegame.wizardPandaIncome !== "undefined") wizardPanda.income = savegame.wizardPandaIncome;
if (typeof savegame.wizardPandaUpg !== "undefined") wizardPanda.timesUpg = savegame.wizardPandaUpg;
// Alchemy Panda
if (typeof savegame.alchemyPandaCost !== "undefined") alchemyPanda.cost = savegame.alchemyPandaCost;
if (typeof savegame.alchemyPandaIncome !== "undefined") alchemyPanda.income = savegame.alchemyPandaIncome;
if (typeof savegame.alchemyPandaUpg !== "undefined") alchemyPanda.timesUpg = savegame.alchemyPandaUpg;
// Bamboo Forest
if (typeof savegame.bambooForestCost !== "undefined") bambooForest.cost = savegame.bambooForestCost;
if (typeof savegame.bambooForestIncome !== "undefined") bambooForest.income = savegame.bambooForestIncome;
if (typeof savegame.bambooForestUpg !== "undefined") bambooForest.timesUpg = savegame.bambooForestUpg;
// Research Facility
if (typeof savegame.researchFacilityCost !== "undefined") researchFacility.cost = savegame.researchFacilityCost;
if (typeof savegame.researchFacilityIncome !== "undefined") researchFacility.income = savegame.researchFacilityIncome;
if (typeof savegame.researchFacilityUpg !== "undefined") researchFacility.timesUpg = savegame.researchFacilityUpg;
// Panda School
if (typeof savegame.pandaSchoolCost !== "undefined") pandaSchool.cost = savegame.pandaSchoolCost;
if (typeof savegame.pandaSchoolIncome !== "undefined") pandaSchool.income = savegame.pandaSchoolIncome;
if (typeof savegame.pandaSchoolUpg !== "undefined") pandaSchool.timesUpg = savegame.pandaSchoolUpg;
// Ninja Panda
if (typeof savegame.ninjaPandaCost !== "undefined") ninjaPanda.cost = savegame.ninjaPandaCost;
if (typeof savegame.ninjaPandaIncome !== "undefined") ninjaPanda.income = savegame.ninjaPandaIncome;
if (typeof savegame.ninjaPandaUpg !== "undefined") ninjaPanda.timesUpg = savegame.ninjaPandaUpg;
// Hero Upgrades
//Hero Upgrade 1 (SWORD)
if (typeof savegame.swordCost !== "undefined") sword.hcost = savegame.swordCost;
if (typeof savegame.swordUpg !== "undefined") sword.timesUp = savegame.swordUpg;
//glory Road (SWORD)
if (typeof savegame.gloryRoadCost !== "undefined") gloryRoad.hcost = savegame.gloryRoadCost;
if (typeof savegame.gloryRoadUpg !== "undefined") gloryRoad.timesUp = savegame.gloryRoadUpg;
//Hero Upgrade 2
if (typeof savegame.gfCost !== "undefined") gf.hcost = savegame.gfCost;
if (typeof savegame.gfUpg !== "undefined") gf.timesUp = savegame.gfUpg;
// Hero Upgrade 3
if (typeof savegame.senseiCost !== "undefined") sensei.hcost = savegame.senseiCost;
if (typeof savegame.senseiUpg !== "undefined") sensei.timesUp = savegame.senseiUpg;
  //Hero upgrade 4
if (typeof savegame.clickbetterCost !== "undefined") clickbetter.hcost = savegame.clickbetterCost;
if (typeof savegame.clickbetterUpg !== "undefined") clickbetter.timesUp = savegame.clickbetterUpg;
 //Hero upgrade 5
if (typeof savegame.clickpercCost !== "undefined") clickperc.hcost = savegame.clickpercCost;
if (typeof savegame.clickpercUpg !== "undefined") clickperc.timesUp = savegame.clickpercUpg;

//name
if (typeof savegame.name !== "undefined") player.name = savegame.name;
//Boss
if (typeof savegame.bossHp !== "undefined") boss.hp = savegame.bossHp;
if (typeof savegame.bossMaxHp !== "undefined") boss.maxhp = savegame.bossMaxHp;
if (typeof savegame.bossTimer !== "undefined") boss.timer = savegame.bossTimer;
if (typeof savegame.bossKills !== "undefined") boss.kills = savegame.bossKills;
if (typeof savegame.bossPerc !== "undefined") boss.perc = savegame.bossPerc;
document.getElementById("selectName").value=localStorage.getItem("selectedname");
if (lazyPanda.timesUpg > 0){
    $("#buyWorkingPanda").prop('disabled', false) == localStorage.getItem("unlocked");
}

    if (sword.timesUp > 0){
    $("#gloryRoad").prop('disabled', false) == localStorage.getItem("unlocked2");
}
    if (clickbetter.timesUp > 0){
    $("#heroUpgrade5").prop('disabled', false) == localStorage.getItem("unlocked2");
    $("#heroUpgrade5, .statback10").show() == localStorage.getItem("unlocked2");
}
       if (gf.timesUp > 0){
    $("#heroUpgrade3").prop('disabled', false) == localStorage.getItem("unlocked2");

}


if (gf.timesUp >= 10){
   $("#heroUpgrade2").prop('disabled', true) == localStorage.getItem("locked");
}

    if (sensei.timesUp >= 4){
   $("#heroUpgrade3").prop('disabled', true) == localStorage.getItem("locked");

}

};

    // Save scroll positions

   if(localStorage.scrollPosition) {
      $(".scroll").scrollTop(localStorage.getItem("scrollPosition"));
   }

           if(localStorage.scrollPosition) {
      $(".scroll2").scrollTop(localStorage.getItem("scrollPosition2"));
   }

    }
});
