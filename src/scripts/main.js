'use strict';

const growthTable = {
  minSize: 2,
  maxSize: 10,
  table: document.querySelector('.field'),
  appendRowBtn: document.querySelector('.append-row'),
  removeRowBtn: document.querySelector('.remove-row'),
  appendColumnBtn: document.querySelector('.append-column'),
  removeColumnBtn: document.querySelector('.remove-column'),

  get body() {
    return this.table.tBodies[0];
  },

  get rows() {
    return this.body.rows;
  },

  appendRow() {
    this.body.append(this.body.lastElementChild.cloneNode(true));

    if (this.rows.length === this.maxSize) {
      this.appendRowBtn.disabled = true;
    }

    if (this.removeRowBtn.disabled === true) {
      this.removeRowBtn.disabled = false;
    }
  },

  removeRow() {
    this.body.lastElementChild.remove();

    if (this.rows.length === this.minSize) {
      this.removeRowBtn.disabled = true;
    }

    if (this.appendRowBtn.disabled === true) {
      this.appendRowBtn.disabled = false;
    }
  },

  appendColumn() {
    [...this.rows].forEach(row => {
      row.append(row.lastElementChild.cloneNode(true));

      if (row.cells.length === this.maxSize) {
        this.appendColumnBtn.disabled = true;
      }

      if (this.removeColumnBtn.disabled === true) {
        this.removeColumnBtn.disabled = false;
      }
    });
  },

  removeColumn() {
    [...this.rows].forEach(row => {
      row.lastElementChild.remove();

      if (row.cells.length === this.minSize) {
        this.removeColumnBtn.disabled = true;
      }

      if (this.appendColumnBtn.disabled === true) {
        this.appendColumnBtn.disabled = false;
      }
    });
  },

  init() {
    this.appendRowBtn.addEventListener('click', () => this.appendRow());
    this.removeRowBtn.addEventListener('click', () => this.removeRow());
    this.appendColumnBtn.addEventListener('click', () => this.appendColumn());
    this.removeColumnBtn.addEventListener('click', () => this.removeColumn());
  },
};

growthTable.init();
