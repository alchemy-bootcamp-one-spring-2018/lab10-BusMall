'use strict';
/* globals Chart imageArray */
/* exported ReportApp */

const appTemplate = document.getElementById('app-template');

class ReportApp {
    constructor() {
        this.products = imageArray;
    }

    render() {
        const dom = appTemplate.content;

        const addChartSection = dom.getElementById('chart-display');
        const addChartComponent = new Chart(this.products);
        addChartSection.appendChild(addChartComponent.render());


        return dom;
    }
}