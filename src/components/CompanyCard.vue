<template>
<div class="list_item home_refinance home_purchase unknown excellent good fair poor single_family town_house condo multifamily co-op">
    <div class="col-md-3">
        <img v-if="company.isTopChoice" class="flag" src="images/top-choice-banner.png">
        <center>
            <img class="list-image" :src='`images/${company.logo}`'>
            <div class="star-rating">
                <img class="star" src="images/svg/star.svg">
                <div class="our-rating">OUR RATING | {{ company.name }}</div>
            </div>
        </center>
    </div>
    <div class="col-md-6">
        <div class="desc_detail">
            <ul class="check">
                <li class="check">Our Editor’s Top Choice</li>
                <li class="check">Consumers have saved on average $34,000 over the life of their loan by refinancing their home loan through LendingTree</li>
                <li class="check">Convient online process</li>
            </ul>
        </div>
    </div>
    <div class="col-md-3">
        <div class="link_learn">
            <div v-if="phone" class="phone-list">(800) 813-4620</div>
            <a href="http://click.getcompared.com/aff_c?offer_id=4&amp;aff_id=1" class="tracking-link">View Rates</a>
            <br>
            <a class="desc_link" href="reviews/lendingtree">Read Review</a>
        </div>
    </div>
</div>
    <!-- <div class="list_item home_refinance home_purchase unknown excellent good fair poor single_family town_house condo multifamily co-op">
        <div class="col-md-3">
            <img class="flag" src="images/top-choice-banner.png">
            <center>
                <img class="list-image" src="images/lendingtree.png">
                <div class="star-rating">
                    <img class="star" src="images/svg/star.svg">
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
      items: sourceData.tech,
      users: sourceData.users,
      categories: sourceData.categories,
      userId: this.$route.params.userId
    };
  },
  computed: {
    user() {
      return this.users[this.userId];
    }
  }
};
</script>

