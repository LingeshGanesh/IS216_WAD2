<script setup>
import { ref, computed } from 'vue';

// Reactive data
const gameStarted = ref(false);
const buttonSpecialAttack = ref(null);

const prince = ref("img/prince.png");
const monster = ref("img/monster.png");

const buttonDetails = ref([
  { action: "attack", btnType: "btn-danger", value: "ATTACK", show: true },
  { action: "specialAttack", btnType: "btn-warning", value: "SPECIAL ATTACK", show: true },
  { action: "heal", btnType: "btn-success", value: "HEAL", show: true },
  { action: "giveUp", btnType: "btn-link", value: "GIVE UP", show: true },
]);

const myHealth = ref(100);
const monsterHealth = ref(100);

const statusList = ref([
  {
    class: "text-dark",
    text: "Game hasn't started."
  }
]);

const MAX_ATTACK = 30;
const MAX_HEAL = 30;
const specialAttackCoolDown = ref(0);

// Locate and store the reference to the special attack button on initialization
buttonSpecialAttack.value = buttonDetails.value.find(
  btn => btn.action === "specialAttack"
);

// Reverses the status log so the latest entry appears first
const reversestatusList = computed(() =>
  statusList.value.slice().reverse()
);

// Dynamically call the method associated with the button's action
function doAction(action) {
  ({ attack, specialAttack, heal, giveUp })[action]();
}

// Start or restart the game
function start() {
  gameStarted.value = true;

  // Reset health, cooldown and re-enable special attack
  specialAttackCoolDown.value = 0;
  buttonSpecialAttack.value.show = true;

  // Reset battle log
  statusList.value = [
    {
      class: "text-dark",
      text: "Game has started"
    }
  ];
}

// Monster's turn after player's action
function doMonster() {
  // If health > 60 or 50% chance, attack the player
  if (monsterHealth.value > 60 || Math.random() < 0.5) {
    const myDmg = Math.floor(Math.random() * MAX_ATTACK);
    myHealth.value -= myDmg;

    statusList.value.push({
      class: "text-danger",
      text: `Monster attacked and you suffered ${myDmg} points`
    });

    // If player's health drops to 0, end game
    if (myHealth.value < 0) {
      myHealth.value = 0;
      statusList.value.push({
        class: "text-muted",
        text: "You lose. Game ends."
      });
      gameStarted.value = false;
    }
    return;
  }

  // Else monster heals itself
  const heal = Math.floor(Math.random() * MAX_HEAL);
  monsterHealth.value = Math.min(monsterHealth.value + heal, 100);

  statusList.value.push({
    class: "text-warning",
    text: `Monster heals itself with ${heal} points.`
  });
}

// Executes attack logic, handles both normal and special attack
function doAttack(special) {
  let maxMultiplier = 1;
  const monsterDmg = Math.floor(Math.random() * MAX_ATTACK);
  let specialTxt = "";
  let x2Text = "";

  // Apply damage multiplier if special attack
  if (special) {
    maxMultiplier = 2;
    specialTxt = "(special)";
    x2Text = "x2";
  }

  monsterHealth.value -= monsterDmg * maxMultiplier;

  // Log the attack status
  statusList.value.push({
    class: "text-dark",
    text: `You attacked ${specialTxt} and monster suffered ${monsterDmg}${x2Text} points.`
  });

  // If monster health drops to 0, player wins
  if (monsterHealth.value < 0) {
    monsterHealth.value = 0;
    statusList.value.push({
      class: "text-success",
      text: "You win. Game ends."
    });
    gameStarted.value = false;
  }
}

// Handles special attack cooldown counter and button reactivation
function decrementCooldown() {
  if (specialAttackCoolDown.value === 0) return;

  // cool down greater than zero
  specialAttackCoolDown.value--;

  if (specialAttackCoolDown.value === 0) {
    buttonSpecialAttack.value.show = true;
  }
}

// Player's normal attack turn
function attack() {
  doAttack(false);
  if (monsterHealth.value > 0)
    doMonster();

  decrementCooldown();
}

// Player's special attack turn
function specialAttack() {
  doAttack(true);
  if (monsterHealth.value > 0)
    doMonster();

  // Set cooldown and hide special attack button
  specialAttackCoolDown.value = 2;
  buttonSpecialAttack.value.show = false;
}

// Player heals, then monster takes turn
function heal() {
  const heal = Math.floor(Math.random() * MAX_HEAL);
  myHealth.value = Math.min(myHealth.value + heal, 100);

  statusList.value.push({
    class: "text-primary",
    text: `You heal yourself with ${heal} points.`
  });

  doMonster();
  decrementCooldown();
}

// End the game manually
function giveUp() {
  gameStarted.value = false;

  statusList.value.push({
    class: "text-dark",
    text: "You ran away. Game ends."
  });
}
</script>

<template>
  <div class="row pb-3 text-center">
    <div class="col-sm-1">
      <!-- blank -->
    </div>
    <div class="col-sm-3">
      <h2>YOU</h2>
      <img :src="prince" alt="" class="w-50">
      <div class="progress my-progress">
        <div class="progress-bar bg-success" v-bind:style="{ 'width': myHealth + '%' }">
          {{ myHealth }}%
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <!-- blank -->
    </div>
    <div class="col-sm-3">
      <h2>MONSTER</h2>
      <img :src="monster" alt="" class="w-50">
      <div class="progress my-progress">
        <div class="progress-bar bg-success" v-bind:style="{ 'width': monsterHealth + '%' }">
          {{ monsterHealth }}%
        </div>
      </div>
    </div>
    <div class="col-sm-1">
      <!-- blank -->
    </div>
  </div>

  <div class="row justify-content-center p-3 text-center" v-if="!gameStarted">
    <p class="lead">Select Player/Monster Strength and Start Game</p>
    <select class="col-sm-2" v-model=myHealth>
      <option>100</option>
      <option>50</option>
    </select>
    <div class="col-sm-8">
      <button id='start' class="btn btn-primary" @click='start'>START NEW GAME</button>
    </div>
    <select class="col-sm-2" v-model=monsterHealth>
      <option>100</option>
      <option>50</option>
    </select>
  </div>

  <!-- In-Game Action Buttons -->
  <div class="row justify-content-center p-3 border text-center" v-else>
    <div class="col-sm-12">
      <!-- 
        v-if has higher precedence than v-for.
        So to use both together, wrap the v-for in a <template> and apply v-if inside.
        Otherwise, v-if would evaluate before v-for initializes `details`.
      -->
      <template v-for='details in buttonDetails'>
        <!-- Render button only if it's set to show -->
        <button v-if='details.show' :class='"btn " + details.btnType' @click="doAction(details.action)">
          {{ details.value }}
        </button>
        &nbsp;
      </template>
    </div>
  </div>

  <!-- Battle Log Section -->
  <div class="row border mt-3 p-3">
    <div class="col-sm-12 text-start">
      <!-- Display status messages (latest on top due to computed reverseStatusList) -->
      <p v-for="status in reversestatusList" :class="status.class">{{ status.text }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Optional styling can go here */
</style>
