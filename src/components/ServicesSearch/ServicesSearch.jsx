import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ServicesSearch.module.css";
import { useCategory } from "../CategoryContext/CategoryContext";

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
      icon: "☁️",
      color: "#3B82F6",
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      description: "Intelligent automation and predictive analytics powered by advanced AI algorithms",
      type: "AI",
      icon: "🤖",
      color: "#10B981",
    },
    {
      id: 3,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services to protect your digital assets and data",
      type: "Security",
      icon: "🛡️",
      color: "#84CC16",
    },
    {
      id: 4,
      title: "Web Development",
      description: "Modern, responsive web applications built with latest technologies and frameworks",
      type: "Development",
      icon: "💻",
      color: "#06B6D4",
    },
    {
      id: 5,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android platforms",
      type: "Mobile",
      icon: "📱",
      color: "#EF4444",
    },
    {
      id: 6,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics tools",
      type: "Analytics",
      icon: "📊",
      color: "#8B5CF6",
    },
    {
      id: 7,
      title: "IoT Solutions",
      description: "Connect and manage devices with our Internet of Things platform and services",
      type: "IoT",
      icon: "🌐",
      color: "#EC4899",
    },
    {
      id: 8,
      title: "Blockchain Development",
      description: "Secure and transparent blockchain solutions for various business applications",
      type: "Blockchain",
      icon: "⛓️",
      color: "#F59E0B",
    },
    {
      id: 9,
      title: "DevOps Services",
      description: "Streamline development and operations with continuous integration and deployment",
      type: "DevOps",
      icon: "⚙️",
      color: "#6366F1",
    },
    {
      id: 10,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and engagement",
      type: "Design",
      icon: "🎨",
      color: "#DC2626",
    },
    {
      id: 11,
      title: "IT Consulting",
      description: "Strategic technology consulting to optimize your IT infrastructure and processes",
      type: "Consulting",
      icon: "💼",
      color: "#7C3AED",
    },
    {
      id: 12,
      title: "Digital Transformation",
      description: "Comprehensive digital transformation services to modernize your business",
      type: "Transformation",
      icon: "🚀",
      color: "#059669",
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

  const getLighterColor = (color) => {
    // Convert hex to RGB and lighten it
    const hex = color.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Lighten by 90%
    const lightR = Math.min(255, r + (255 - r) * 0.9);
    const lightG = Math.min(255, g + (255 - g) * 0.9);
    const lightB = Math.min(255, b + (255 - b) * 0.9);

    return `rgb(${Math.round(lightR)}, ${Math.round(lightG)}, ${Math.round(
      lightB
    )})`;
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
              placeholder="Search services by name or description..."
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
              Filter by Type:
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
              Sort by:
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
            Clear All Filters
          </button>
        )}
      </div>

      <div className={styles.servicesGrid} data-aos="fade">
        {filteredAndSortedServices.map((service) => (
          <div
            key={service.id}
            className={styles.serviceCard}
            data-category={service.type}
            style={{
              borderLeftColor: service.color,
              backgroundColor: getLighterColor(service.color),
            }}
          >
            <div className={styles.cardHeader}>
              <div
                className={styles.iconContainer}
                style={{ backgroundColor: service.color }}
              >
                <span className={styles.serviceIcon}>{service.icon}</span>
              </div>
              <div
                className={styles.typeBadge}
                style={{ backgroundColor: service.color }}
              >
                {service.type}
              </div>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>

            <div className={styles.cardFooter}>
              <button
                className={styles.detailsButton}
                style={{
                  backgroundColor: service.color,
                  borderColor: service.color,
                }}
                onClick={handleDetailsClick}
              >
                View Details
              </button>
            </div>

            <div
              className={styles.cardGlow}
              style={{ backgroundColor: service.color }}
            ></div>
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