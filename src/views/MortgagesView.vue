<template>
<main>
    <div class="title-background">
        <div class="container">
            <div class="col-md-12">
                <h1 class="category-title">The Best Mortgage Companies of 2018</h1>
                <div class="category-content">
                    Find your perfect match with our curated list of top companies
                </div>
            </div>

            <div class="disclosure" data-toggle="modal" data-target="#disclosure">We receive referral fees from some of our partners: Advertising Disclosure
            </div>
            <!-- Advertising Disclosure -->
            <div class="modal fade" id="disclosure" tabindex="-1" role="dialog" aria-labelledby="disclosure" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            We work to provide you, our customer, with a range of finance options. We earn revenue from many of the providers of the
                            products that are listed on this site. Depending on the provider, we might earn revenue when
                            customers click on a link, similar to how most internet advertising works. We do not earn any
                            revenue if our customers do not click on links. Under certain circumstances, providers are able
                            to influence their positioning, including order, on this site. Our reviews and analysis are based
                            on our research and experience with these providers and these products. Our most important asset
                            is the trust of our customers, and our analysis needs to reflect reality to maintain that trust.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div style="text-align: center; margin-top: 15px; margin-bottom: 15px;" data-toggle="collapse" data-target="#filter" class=""
        aria-expanded="true">Show Filters</div>

    <div id="filter" style="margin-top: 15px;" class="container collapse in" aria-expanded="true">
        <div class="col-md-3">
            <div class="form-group">
                <label for="exampleFormControlSelect1">Loan Type</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option value="home_refinance">Home Refinance</option>
                    <option value="home_purchase">Home Purchase</option>
                </select>
            </div>
        </div>
        <div class="col-md-3">
            <div class="form-group">
                <label for="exampleFormControlSelect1">Credit Score</label>
                <select class="form-control" id="exampleFormControlSelect2">
                    <option value="unknown">Unknown</option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="poor">Poor</option>
                </select>
            </div>
        </div>
        <div class="col-md-3">
            <div class="form-group">
                <label for="exampleFormControlSelect1">Home Type</label>
                <select class="form-control" id="exampleFormControlSelect3">
                    <option value="single_family">Single Family</option>
                    <option value="town_house">Town House</option>
                    <option value="condo">Condo</option>
                    <option value="multifamily">Multifamily</option>
                    <option value="co-op">Co-op</option>
                </select>
            </div>
        </div>
        <div class="col-md-3">
            <div class="form-group">
                <a href="#" class="ybtn ybtn-white ybtn-shadow">Refresh</a>
            </div>
        </div>
    </div>

    <!-- Company List start -->
    <div class="container items_container">
        <div class="list_item home_refinance home_purchase unknown excellent good fair poor single_family town_house condo multifamily co-op">
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
                        <li class="check">Consumers have saved on average $34,000 over the life of their loan by refinancing their home loan
                            through LendingTree</li>
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
        </div>
        <div class="list_item home_refinance home_purchase unknown excellent good fair poor single_family town_house condo multifamily co-op">
            <div class="col-md-3">
                <center>
                    <img class="list-image" src="../assets/quickenloans.png">
                    <div class="star-rating">
                        <img class="star" src="../assets/svg/star.svg">
                        <div class="our-rating">OUR RATING | 4.9</div>
                    </div>
                </center>
            </div>
            <div class="col-md-6">
                <div class="desc_detail">
                    <ul class="check">
                        <li class="check">Flexible fixed term and adjustable rate mortgage options</li>
                        <li class="check">Highest ranking in customer service by J.D. Power for 8 consecutive years</li>
                        <li class="check-secondary">Offer 1% down home purchase loan</li>
                        <li class="check-secondary">Cash out mortgage options</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="link_learn">
                    <a href="#" class="ybtn ybtn-accent-color">View Rates</a>
                    <br>
                    <a class="desc_link" href="reviews/quickenloans">Read Review</a>
                </div>
            </div>
        </div>
        <div class="list_item home_refinance home_purchase unknown excellent good fair poor single_family town_house condo multifamily co-op">
            <div class="col-md-3">
                <center>
                    <img class="list-image" src="../assets/loandepot.png">
                    <div class="star-rating">
                        <img class="star" src="../assets/svg/4-half.svg">
                        <div class="our-rating">OUR RATING | 4.8</div>
                    </div>
                </center>
            </div>
            <div class="col-md-6">
                <div class="desc_detail">
                    <ul class="check">
                        <li class="check">Extremely competitive ARP’s</li>
                        <li class="check">Offers fixed-rate, adjustable-rate, home equity, FHA, jumbo, and VA mortgages</li>
                        <li class="check-secondary">LoanDepot Lifetime Guarantee</li>
                        <li class="check-secondary">No application fees</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="link_learn">
                    <a href="#" class="ybtn ybtn-accent-color">View Rates</a>
                    <br>
                    <a class="desc_link" href="reviews/loandepot">Read Review</a>
                </div>
            </div>
        </div>
        <div class="list_item home_refinance home_purchase unknown excellent good fair poor single_family town_house condo multifamily co-op">
            <div class="col-md-3">
                <center>
                    <img class="list-image" src="../assets/jgwentworth.png">
                    <div class="star-rating">
                        <img class="star" src="../assets/svg/4-half.svg">
                        <div class="our-rating">OUR RATING | 4.8</div>
                    </div>
                </center>
            </div>
            <div class="col-md-6">
                <div class="desc_detail">
                    <ul class="check">
                        <li class="check">Low rates with no point options</li>
                        <li class="check">Offer fixed-rate, adjustable-rates, FHA, Jumbo, and VA mortgages</li>
                        <li class="check-secondary">25+ year history of customer service excellence</li>
                        <li class="check-secondary">Direct lender</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="link_learn">
                    <a href="#" class="ybtn ybtn-accent-color">View Rates</a>
                    <br>
                    <a class="desc_link" href="reviews/jgwentworth">Read Review</a>
                </div>
            </div>
        </div>
        <div class="list_item home_purchase unknown excellent good fair poor single_family town_house condo multifamily co-op">
            <div class="col-md-3">
                <center>
                    <img class="list-image" src="../assets/bettermortgage.png">
                    <div class="star-rating">
                        <img class="star" src="../assets/svg/4-half.svg">
                        <div class="our-rating">OUR RATING | 4.7</div>
                    </div>
                </center>
            </div>
            <div class="col-md-6">
                <div class="desc_detail">
                    <ul class="check">
                        <li class="check">The Better Price Guarantee ensures the lender will beat a competitor's offer by at least $1000 or
                            you’ll get a $1000 check</li>
                        <li class="check">An impressively simple online process</li>
                        <li class="check-secondary">Offers a variety of loan options online</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="link_learn">
                    <a href="#" class="ybtn ybtn-accent-color">View Rates</a>
                    <br>
                    <a class="desc_link" href="reviews/better">Read Review</a>
                </div>
            </div>
        </div>
        <div class="list_item home_refinance unknown excellent good fair poor single_family town_house condo multifamily co-op">
            <div class="col-md-3">
                <center>
                    <img class="list-image" src="../assets/bettermortgage.png">
                    <div class="star-rating">
                        <img class="star" src="../assets/svg/4-half.svg">
                        <div class="our-rating">OUR RATING | 4.7</div>
                    </div>
                </center>
            </div>
            <div class="col-md-6">
                <div class="desc_detail">
                    <ul class="check">
                        <li class="check">The Better Price Guarantee ensures the lender will beat a competitor's offer by at least $1000 or
                            you’ll get a $1000 check</li>
                        <li class="check">An impressively simple online process</li>
                        <li class="check-secondary">Offers a variety of loan options online</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="link_learn">
                    <a href="#" class="ybtn ybtn-accent-color">View Rates</a>
                    <br>
                    <a class="desc_link" href="reviews/better">Read Review</a>
                </div>
            </div>
        </div>
        <div class="list_item home_refinance home_purchase unknown excellent good fair poor single_family town_house condo multifamily co-op">
            <div class="col-md-3">
                <center>
                    <img class="list-image" src="../assets/rocketmortgage.png">
                    <div class="star-rating">
                        <img class="star" src="../assets/svg/4-half.svg">
                        <div class="our-rating">OUR RATING | 4.6</div>
                    </div>
                </center>
            </div>
            <div class="col-md-6">
                <div class="desc_detail">
                    <ul class="check">
                        <li class="check">A completely, truly online solution.</li>
                        <li class="check">Highest ranking lender in customer satisfaction by J.D. Power and Associates for 8 consecutive years.</li>
                        <li class="check-secondary">Offers a 1% down home purchase loan.</li>
                        <li class="check-secondary">Offers cash-out mortgages.</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="link_learn">
                    <a href="#" class="ybtn ybtn-accent-color">View Rates</a>
                    <br>
                    <a class="desc_link" href="reviews/rocketmortgage">Read Review</a>
                </div>
            </div>
        </div>
        <div class="list_item home_refinance home_purchase unknown excellent good fair poor single_family town_house condo multifamily co-op">
            <div class="col-md-3">
                <center>
                    <img class="list-image" src="../assets/amerisave.png">
                    <div class="star-rating">
                        <img class="star" src="../assets/svg/4-half.svg">
                        <div class="our-rating">OUR RATING | 4.4</div>
                    </div>
                </center>
            </div>
            <div class="col-md-6">
                <div class="desc_detail">
                    <ul class="check">
                        <li class="check">Amerisave is the original online lender</li>
                        <li class="check">Online process keeps costs low</li>
                        <li class="check-secondary">A direct lender that has funded billions in loans</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="link_learn">
                    <a href="#" class="ybtn ybtn-accent-color">View Rates</a>
                    <br>
                    <a class="desc_link" href="reviews/amerisave">Read Review</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Company List end -->
    <div class="spacer"></div>
    <!-- Newsletter C2A start -->
    <div id="extra-info" class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="text-holder">
                        <h1>Ready? Let’s fix
                            <br> your finances.</h1>
                        <p>We send out an informative newsletter each month with information that helps.</p>
                    </div>
                </div>
                <div class="col-md-6 link-holder">
                    <a href="#" class="ybtn ybtn-white ybtn-shadow">Join Our Newsletter</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Newsletter C2A end -->
</main>
</template>

<script>
// @ is an alias to /src
import CompanyCard from "@/components/CompanyCard.vue";

export default {
  name: "mortgages",
  components: {}
};
</script>
