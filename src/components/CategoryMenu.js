
import React from 'react'
const CategoryMenu = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
          ></li>
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div class="carousel-inner mb-5" style={{ maxHeight: "400px" }}>
          <div class="carousel-item active d-flex justify-content-center border-0">
            <img
              src="https://images.unsplash.com/photo-1601330862030-1e08c703ac04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvY2FsJTIwbWFya2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              class="d-block w-100"
              alt="..."
              style={{ backgroundSize: "cover", backgroundPosition: "center" }}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1552710307-8d1c604d6319?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1620358505483-5806ae840a6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </>
  );
}

export default CategoryMenu