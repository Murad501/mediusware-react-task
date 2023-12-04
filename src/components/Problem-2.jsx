import React, { useState } from "react";

const Problem2 = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            style={{
              backgroundColor: "#46139f",
            }}
            className="btn btn-lg text-white"
            type="button"
            data-bs-toggle="modal"
            href="#allContactModal"
          >
            All Contacts
          </button>
          <button
            style={{
              backgroundColor: "#ff7f50",
            }}
            className="btn btn-lg text-white"
            type="button"
            data-bs-target="#usContactModal"
            data-bs-toggle="modal"
          >
            US Contacts
          </button>
        </div>
      </div>

      {/* all contacts */}
      <div className="modal fade" id="allContactModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">All Contacts</h5>
              <button
                style={{
                  borderColor: "#46139f",
                  color: "#46139f",
                }}
                className="btn border"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Close
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center">
                <button
                  style={{
                    backgroundColor: "#46139f",
                  }}
                  className="btn m-2 text-white"
                  data-bs-toggle="modal"
                  href="#allContactModal"
                  data-bs-dismiss="modal"
                >
                  All Contacts
                </button>
                <button
                  style={{
                    backgroundColor: "#ff7f50",
                  }}
                  className="btn m-2 text-white"
                  data-bs-toggle="modal"
                  href="#usContactModal"
                  data-bs-dismiss="modal"
                >
                  Us Contacts
                </button>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-start">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="allContactCheckbox"
              />
              <label class="form-check-label" for="allContactCheckbox">
                Only Even
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* us contact */}
      <div className="modal fade" id="usContactModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Us Contacts</h5>
              <button
                style={{
                  borderColor: "#46139f",
                  color: "#46139f",
                }}
                className="btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Close
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center">
                <button
                  style={{
                    backgroundColor: "#46139f",
                  }}
                  className="btn m-2 text-white"
                  data-bs-toggle="modal"
                  href="#allContactModal"
                  data-bs-dismiss="modal"
                >
                  All Contacts
                </button>
                <button
                  style={{
                    backgroundColor: "#ff7f50",
                  }}
                  className="btn m-2 text-white"
                  data-bs-toggle="modal"
                  href="#usContactModal"
                  data-bs-dismiss="modal"
                >
                  Us Contacts
                </button>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-start">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="usContactCheckbox"
              />
              <label class="form-check-label" for="usContactCheckbox">
                Only Even
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
