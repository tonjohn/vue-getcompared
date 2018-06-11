<template>
<div class="list_item home_refinance home_purchase unknown excellent good fair poor single_family town_house condo multifamily co-op">
    <div class="col-md-3">
        <img v-if="company.isTopChoice" class="flag" src="../assets/top-choice-banner.png">
        <center>
            <img class="list-image" :src='require(`../assets/${company.logo}`)'>
            <div class="star-rating">
                <img class="star" :src='require(`../assets/svg/${starsImg}`)'>
                <div class="our-rating">OUR RATING | {{ company.rating }}</div>
            </div>
        </center>
    </div>
    <div class="col-md-6">
        <div class="desc_detail">
            <ul class="check">
                <li class="check" v-for="detail in company.detailList">{{detail}}</li>
            </ul>
        </div>
    </div>
    <div class="col-md-3">
        <div v-if="company.phone" class="link_learn">
            <div class="phone-list">{{company.phone}}</div>
            <a href="http://click.getcompared.com/aff_c?offer_id=4&amp;aff_id=1" class="tracking-link">View Rates</a>
            <br>
            <a class="desc_link" href="reviews/lendingtree">Read Review</a>
        </div>
        <div v-else class="link_learn">
                <a href="#" class="ybtn ybtn-accent-color">View Rates</a>
                <br>
                <a class="desc_link" href="reviews/quickenloans">Read Review</a>
            </div>
    </div>
</div>
    <!-- <div class="list_item home_refinance home_purchase unknown excellent good fair poor single_family town_house condo multifamily co-op">
        <div class="col-md-3">
            <img class="flag" src="../assets/top-choice-banner.png">
            <center>
                <img class="list-image" src="../assets/lendingtree.png">
                <div class="star-rating">
                    <img class="star" src="../assets/svg/star.svg">
                    <div class="our-rating">OUR RATING | 5.0</div>
                </div>
            </center>
        </div>
        <div class="col-md-6">
            <div class="desc_detail">
                <ul class="check">
                    <li class="check-secondary">Our Editor’s Top Choice</li>
                    <li class="check">Consumers have saved on average $34,000 over the life of their loan by refinancing their home loan through LendingTree</li>
                    <li class="check-secondary">Convient online process</li>
                </ul>
            </div>
        </div>
        <div class="col-md-3">
            <div class="link_learn">
                <div class="phone-list">(800) 813-4620</div>
                <a href="http://click.getcompared.com/aff_c?offer_id=4&amp;aff_id=1" class="tracking-link">View Rates</a>
                <br>
                <a class="desc_link" href="reviews/lendingtree">Read Review</a>
            </div>
        </div>
    </div> -->
</template>

<script>
import sourceData from "../data";

export default {
  components: {},
  props: {
    company: Object
  },
  data() {
    return {
      tags: sourceData.tags
    };
  },
  computed: {
    starsImg() {
      if (this.company.rating >= 4.9) return "star.svg";
      return "4-half.svg";
    }
  }
};
</script>
