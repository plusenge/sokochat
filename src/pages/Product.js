import React, { useState, useEffect, useContext } from 'react'
import {
  collection,
  orderBy,
  query,
  getDocs,
  limit,
  where,
} from 'firebase/firestore'
import { db } from '../firebaseConfig'
import AdCard from '../components/AdCard'
import { AuthContext } from '../context/auth'
import { Link } from 'react-router-dom'
// import "./Home.css";
import { categories, locations } from '../data/config'
import NotFoundSearch from '../components/NotFoundSearch'
import Footer from '../components/Footer'
import '../pages/Product.css'

const Home = ({ toggleIsSold }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isFilterSelected, setIsFilterSelected] = useState(false)
  const [ads, setAds] = useState([])
  const { user } = useContext(AuthContext)
  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubCategory, setSelectedSubcategory] = useState('')
  const [displayCount, setDisplayCount] = useState(8)
  const [isLoadMore, setIsLoadMore] = useState(false)

  // Event handler for selecting a category
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value
    setSelectedCategory(selectedCategory)
    setSelectedSubcategory('')
    //Not found product message only show when filter =0 or search = 0
    setIsFilterSelected(true)
  }
  // Get the object for the currently selected category
  const selectedCategoryObj = categories.find(
    (category) => category.name === selectedCategory,
  )
  // Event handler for selecting a subcategory
  const handleSubcategoryClick = (subcategoryName) => {
    setSelectedSubcategory(subcategoryName)
    //Not found product message only show when filter =0 or search = 0
    setIsFilterSelected(true)
  }
  const handleSortByPrice = (ads) => {
    if (selectedPrice === 'high') {
      return ads.sort((a, b) => b.price - a.price)
    } else if (selectedPrice === 'low') {
      return ads.sort((a, b) => a.price - b.price)
    } else {
      return ads
    }
  }
  // Get ads handler function
  const getAds = async () => {
    const adsRef = collection(db, 'ads')
    let q
    if (selectedCategory) {
      if (selectedSubCategory) {
        q = query(
          adsRef,
          orderBy('publishedAt', 'desc'),
          where('category', '==', selectedCategory),
          where('subcategory', '==', selectedSubCategory),
          limit(displayCount), //include the limit parameter based on displayCount
        )
      } else {
        q = query(
          adsRef,
          orderBy('publishedAt', 'desc'),
          where('category', '==', selectedCategory),
          limit(displayCount),
        )
      }
    } else {
      q = query(adsRef, orderBy('publishedAt', 'desc'), limit(displayCount))
    }

    const adDocs = await getDocs(q)
    let ads = []
    adDocs.forEach((doc) => ads.push({ ...doc.data(), id: doc.id }))
    setAds(handleSortByPrice(ads))
  }
  useEffect(() => {
    getAds()
  }, [selectedCategory, selectedPrice, selectedSubCategory])

  const handleFavoriteClick = (ad) => {
    if (!user) {
      // redirect to login page if user is not logged in
      return <Link to="/auth/login" />
    }
    // handle adding to favorites for logged in user
    console.log('Add to favorites:', ad)
  }
  const handleRemoveAllClick = () => {
    setSelectedPrice('')
    setSelectedCategory('')
    setSelectedSubcategory('')
  }

  const handleLoadMoreClick = () => {
    setDisplayCount((prevDisplayCount) => prevDisplayCount + 4) // Increase the display count by 4 when clicked
  }

  useEffect(() => {
    // Fetch ads whenever selectedCategory, selectedPrice, selectedSubCategory, or displayCount changes
    getAds()
  }, [selectedCategory, selectedPrice, selectedSubCategory, displayCount])

  return (
    <>
      <div className="container category-container">
        <div
          className="d-flex justify-content-center justify-content-md-between flex-wrap filter-container p-3"
          style={{ backgroundColor: 'aliceblue' }}
        >
          <div className="sortyBy_price mx-2">
            <h6>Sort By</h6>
            <select
              className="form-select sortBy-price__container"
              onChange={(e) => setSelectedPrice(e.target.value)}
              value={selectedPrice}
            >
              <option value="">Latest</option>
              <option value="high">Price High</option>
              <option value="low">Price Low</option>
            </select>
          </div>
          <div className="d-flex justify-content-center justify-content-md-between flex-wrap ">
            <div>
              <div className="filter-container">
                <h6 className="filter-bycategory__title mt-3" FilterByCategory>
                  Filter By Category
                </h6>
                <select
                  className="form-select filter-input__category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">All</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              {selectedCategoryObj && (
                <div
                  className="subcategory-container"
                  // style={{ position: "fixed", zIndex: "1" }}
                >
                  {/*Important display commented it out, don't delete */}
                  {/* <h6 className="mt-3 display-category__name">
                    {selectedCategoryObj.name}
                  </h6> */}
                  <ul className="subcategory-list">
                    {selectedCategoryObj.subcategories.map(
                      (subcategory, index) => (
                        <li
                          key={index}
                          className={`subcategory ${
                            subcategory === selectedSubCategory ? 'active' : ''
                          }`}
                          onClick={() => handleSubcategoryClick(subcategory)}
                        >
                          {subcategory}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}
              {selectedSubCategory && (
                <div className="category-list">
                  <p
                    className="category active"
                    onClick={() => setSelectedSubcategory('')}
                  >
                    {selectedSubCategory} <i className="bi bi-x"></i>
                  </p>
                </div>
              )}
            </div>

            {selectedPrice || selectedCategory || selectedSubCategory ? (
              <div className="remove-all-container">
                <button
                  className=" btn remove-all_filter"
                  onClick={handleRemoveAllClick}
                >
                  Remove
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <h4 className="mt-5 mb-0">Recent Listings...</h4>

        {/*AdCard component pass handleFavoriteClick function*/}
        {ads.length > 0 ? (
          <div className="row">
            {ads.map((ad) => (
              <div className="col-sm-6 col-md-4 col-xl-3 mb-3" key={ad.adId}>
                <AdCard
                  ad={ad}
                  onFavoriteClick={handleFavoriteClick}
                  key={ad.adId}
                  id={ad.adId}
                  title={ad.title}
                  price={ad.price}
                  location={ad.location}
                  images={ad.images}
                  isSold={ad.isSold}
                  toggleIsSold={toggleIsSold}
                />
              </div>
            ))}
          </div>
        ) : (
          (searchQuery || isFilterSelected) && <NotFoundSearch />
        )}

        {ads.length > 0 && ads.length >= displayCount && (
          <div className="text-center mt-3">
            <button className="btn btn-primary" onClick={handleLoadMoreClick}>
              Load More
            </button>
          </div>
        )}
      </div>
      <div className="text-center h-100">
        <Footer />
      </div>
    </>
  )
}
export default Home
