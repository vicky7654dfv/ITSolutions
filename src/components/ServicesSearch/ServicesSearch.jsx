import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ServicesSearch.module.css";
import { useCategory } from "../CategoryContext/CategoryContext";

// Importing Assets (REPLACE THESE WITH YOUR ACTUAL IMAGE PATHS)
import cloudImg from "../../assets/HomePage1/ServicesSearch/1.webp";
import aiImg from "../../assets/HomePage1/ServicesSearch/2.webp";
import securityImg from "../../assets/HomePage1/ServicesSearch/3.webp";
import webImg from "../../assets/HomePage1/ServicesSearch/4.webp";
import mobileImg from "../../assets/HomePage1/ServicesSearch/5.webp";
import dataImg from "../../assets/HomePage1/ServicesSearch/6.webp";
import iotImg from "../../assets/HomePage1/ServicesSearch/7.webp";
import blockchainImg from "../../assets/HomePage1/ServicesSearch/8.webp";
import devopsImg from "../../assets/HomePage1/ServicesSearch/9.webp";
import designImg from "../../assets/HomePage1/ServicesSearch/10.webp";
import consultingImg from "../../assets/HomePage1/ServicesSearch/11.webp";
import transformImg from "../../assets/HomePage1/ServicesSearch/12.webp";

const ServicesSearch = () => {
  const navigate = useNavigate();
  const { activeCategory, setActiveCategory } = useCategory();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const servicesData = [
    {
      id: 1,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions with AWS, Azure, and Google Cloud for seamless business operations",
      type: "Cloud",
      image: cloudImg,
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      description: "Intelligent automation and predictive analytics powered by advanced AI algorithms",
      type: "AI",
      image: aiImg,
    },
    {
      id: 3,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services to protect your digital assets and data",
      type: "Security",
      image: securityImg,
    },
    {
      id: 4,
      title: "Web Development",
      description: "Modern, responsive web applications built with latest technologies and frameworks",
      type: "Development",
      image: webImg,
    },
    {
      id: 5,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android platforms",
      type: "Mobile",
      image: mobileImg,
    },
    {
      id: 6,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics tools",
      type: "Analytics",
      image: dataImg,
    },
    {
      id: 7,
      title: "IoT Solutions",
      description: "Connect and manage devices with our Internet of Things platform and services",
      type: "IoT",
      image: iotImg,
    },
    {
      id: 8,
      title: "Blockchain Development",
      description: "Secure and transparent blockchain solutions for various business applications",
      type: "Blockchain",
      image: blockchainImg,
    },
    {
      id: 9,
      title: "DevOps Services",
      description: "Streamline development and operations with continuous integration and deployment",
      type: "DevOps",
      image: devopsImg,
    },
    {
      id: 10,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and engagement",
      type: "Design",
      image: designImg,
    },
    {
      id: 11,
      title: "IT Consulting",
      description: "Strategic technology consulting to optimize your IT infrastructure and processes",
      type: "Consulting",
      image: consultingImg,
    },
    {
      id: 12,
      title: "Digital Transformation",
      description: "Comprehensive digital transformation services to modernize your business",
      type: "Transformation",
      image: transformImg,
    },
  ];

  const serviceTypes = [
    "All",
    ...new Set(servicesData.map((service) => service.type)),
  ];

  // Sync activeCategory with selectedType
  useEffect(() => {
    if (activeCategory) {
      setSelectedType(activeCategory);

      const fromFooter = sessionStorage.getItem("fromFooterCategory");

      if (!fromFooter) {
        setTimeout(() => {
          const firstCard = document.querySelector(
            `[data-category="${activeCategory}"]`
          );
          if (firstCard) {
            firstCard.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 500);
      }

      sessionStorage.removeItem("fromFooterCategory");
    }
  }, [activeCategory]);

  const filteredAndSortedServices = useMemo(() => {
    let filtered = servicesData.filter((service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType =
        selectedType === "All" || service.type === selectedType;
      return matchesSearch && matchesType;
    });

    // Sort services
    if (sortOrder === "name") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "type") {
      filtered.sort((a, b) => a.type.localeCompare(b.type));
    }

    return filtered;
  }, [searchTerm, selectedType, sortOrder]);

  const handleDetailsClick = () => {
    navigate("/Error");
  };

  const handleCategoryChange = (category) => {
    setSelectedType(category);
    setActiveCategory(category);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    if (term) {
      setSelectedType("All");
      setActiveCategory(null);
    }
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedType("All");
    setActiveCategory(null);
    setSortOrder("default");
  };

  return (
    <div data-aos="fade" className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Next-Gen IT Solutions</h1>
        <p className={styles.subtitle}>
          Discover our comprehensive range of cutting-edge technology solutions designed to transform your business
        </p>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              id="inputSearch"
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className={styles.searchInput}
            />
            {searchTerm && (
              <button
                className={styles.clearSearch}
                onClick={() => handleSearchChange("")}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className={styles.filterContainer}>
          <div className={styles.filterGroup}>
            <label htmlFor="nameSelect" className={styles.filterLabel}>
              Type:
            </label>
            <select
              id="nameSelect"
              value={selectedType}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className={styles.filterSelect}
            >
              {serviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label htmlFor="nameSelectSort" className={styles.filterLabel}>
              Sort:
            </label>
            <select
              id="nameSelectSort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="default">Default</option>
              <option value="name">Name (A-Z)</option>
              <option value="type">Type</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.resultsInfo}>
        <p className={styles.resultsCount}>
          Showing {filteredAndSortedServices.length} of {servicesData.length}{" "}
          services
          {selectedType !== "All" && ` in ${selectedType}`}
        </p>
        {(searchTerm || selectedType !== "All") && (
          <button className={styles.clearFilters} onClick={clearAllFilters}>
            Clear All
          </button>
        )}
      </div>

      <div className={styles.servicesGrid} data-aos="fade">
        {filteredAndSortedServices.map((service) => (
          <div
            key={service.id}
            className={styles.serviceCard}
            data-category={service.type}
          >
            {/* Added Shine Effect Element in CSS */}
            
            <div className={styles.imageWrapper}>
              <img 
                src={service.image} 
                alt={service.title} 
                className={styles.serviceImage} 
              />
            </div>

            <div className={styles.cardContent}>
              <div className={styles.typeBadge}>
                {service.type}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>

            <div className={styles.cardFooter}>
              <button
                className={styles.detailsButton}
                onClick={handleDetailsClick}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredAndSortedServices.length === 0 && (
        <div className={styles.noResults}>
          <div className={styles.noResultsIcon}>🔍</div>
          <h3 className={styles.noResultsTitle}>No services found</h3>
          <p className={styles.noResultsText}>
            {searchTerm
              ? `No services found for "${searchTerm}". Try adjusting your search terms.`
              : `No services available in ${selectedType} category.`}
          </p>
          <button className={styles.resetButton} onClick={clearAllFilters}>
            Show All Services
          </button>
        </div>
      )}
    </div>
  );
};

export default ServicesSearch;