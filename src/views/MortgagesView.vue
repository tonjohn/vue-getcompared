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
            <div v-if="isDirty" class="form-group">
                <a href="#" class="ybtn ybtn-white ybtn-shadow">Reset</a>
            </div>
        </div>
    </div>

    <!-- Company List start -->
    <div class="container items_container">
        <CompanyCard v-for="company in companies" :key="company['.key']" :company="company"/>

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
import sourceData from "../data"; // load placeholder data

// @ is an alias to /src
import CompanyCard from "@/components/CompanyCard.vue";

export default {
  name: "mortgages",
  components: { CompanyCard },
  data() {
    return {
      companies: sourceData.mortgage,
      isDirty: false
    };
  },
  computed: {
    filteredCompanies() {
      // TODO: filter based on input values
      return this.companies;
    }
  }
};
</script>
