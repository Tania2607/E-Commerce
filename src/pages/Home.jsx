import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Home.css';
import img1 from "../assets/imgwomen.jpg"
import img2 from "../assets/imgchild.jpg"

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80",
      title: "Premium Men's Collection",
      description: "Discover our exclusive range of men's fashion essentials. Style meets comfort.",
      cta: "Shop Men's Collection",
      category: "men",
      tagline: "Elevate Your Style"
    },
    {
      image: img1,
      title: "Women's Fashion Hub",
      description: "Explore our curated collection of women's fashion. Trendy, elegant, and timeless.",
      cta: "Shop Women's Collection",
      category: "women",
      tagline: "Style Your Story"
    },
    {
      image: img2,
      title: "Kids Fashion World",
      description: "Discover our playful and stylish kids' collection. Comfort meets fun.",
      cta: "Shop Kids Collection",
      category: "children",
      tagline: "Little Fashionistas"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleShopNow = (category = null) => {
    if (category) {
      navigate(`/shopping?category=${category}`);
    } else {
      navigate('/shopping');
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      
      {/* Hero Carousel */}
      <section className="hero-carousel">
        <div className="carousel-container">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="slide-image">
                <img src={slide.image} alt={slide.title} />
                <div className="slide-overlay"></div>
              </div>
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <button 
                  className="cta-button"
                  onClick={() => handleShopNow(slide.category)}
                >
                  {slide.cta}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
          
          {/* Navigation */}
          <button className="carousel-nav prev" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="carousel-nav next" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* Dots */}
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Shop by Category</h2>
            <p>Explore our curated collections</p>
          </div>
          
          <div className="categories-grid">
            <div className="category-card" onClick={() => handleShopNow('men')}>
              <div className="category-image">
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&h=300&fit=crop" alt="Men's Fashion" />
                <div className="category-overlay">
                  <h3>Men's Fashion</h3>
                  <p>Modern & Stylish</p>
                  <span className="shop-link">Shop Now →</span>
                </div>
              </div>
            </div>
            
           <div className="category-card" onClick={() => handleShopNow('women')}>
              <div className="category-image">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAtgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwACAQj/xAA+EAACAQMCBAQDBgUCBAcAAAABAgMABBEFIQYSMUETIlFhFHGBBzJCkaGxFSNSwdFikhYkM/A1Q3KistLh/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EACYRAAICAgICAQQDAQAAAAAAAAABAgMRIRIxBEETBSIyUWFicTP/2gAMAwEAAhEDEQA/AGeKPzk1YxgVGhxJj1FWMZFMh0LkL3EF5a2YV7hQSTgZFTcNzxXmnO6YAyR6UG+0FMwIw7MKD8MahcwwvGp8nN1zQyLiVNXgPxku2PMaE2SMt6PZqN6lMZJiT1yaEWiu94eXNRBG3cM3Cz2UfI2RgUbnwikmlLgVQtry83QDvTVfkLAebpVEFXiC8jPmXcp1HrRDQOIrVrTEr+GV7MaUdfuoVdwr749aVzqJjwAaRKlSeTVXZFLEjTNQ1xJXfweVh2IoPe6xK/LkY5TmlqDV4VQEsMivF5rcDgYI2oo1YWDROytWRaYyx6pI5GB+tDtV1GYTIVYqQeooEOII4ztg1XudVa4UyICAN6L410Ff5Vco6Y42Ot3iwsgk8p7mqt7l7YymXzfOlOPU7nOI1b8jVe71i6CFWJAO2DtUVcV0Ju8qM6+KQwPdoIPM+4obHeoshDSZVqXpNQmYcuf1qISyEdKNJITHyJRxg0HRLqE30Cq/Vugp7bAAJzWI6LfS2Oq21zKkhjRskYPStJ/410iWWKDxl5pGCge5rzv1rxrbZx+NZNdXkqbbloZYOUSqRvmiLOuPu1VtoQI1kG/pUjXA8Tl5RmtP0fxrPHrcbF7M/lTjJpo+sx/prq9lmIBArq7BkAkfMZVOO1XADivSxKu9SjlxvRw6Bl2JnHuFslZh6Uh2mrJblkToa0H7RUDaUWHQVk7cokO2atkQafUvEf7tUv4j8Pccx2Jph0PQxc2olZM5FfE0SGTUuSRRtsBQKayE4vA1fZffSXUtxznbK4HpT1xFz/w+TkODjakvga2Wz1W4jUADK9Ke9VUNZyD2q08ldGA3st9JdyqSzYONqr+DeP8AgOad7Gwia6ui4GeY1XmRY5mURjr1pLsecIfGpNZbFFbG7bPMMAV0dhNOxC9vanEBfBfKgbV2gJCJJPExnND8ksMZ8CTWxTTQ7mRsbj6UU0vTXkvPgIIHuJlQNJ2SP0ye1Of/ACqoxGGYdFHUmjmi2FtZWISNonkY+JNIhzzOepz6dh7AUuVsxkao5wZ22k8QWZJksVuYR2gxzKPb1+tfbWVJsjyyJnlaORMMp/pYHof0960ePU7F7hoI5Hkl7hIWYD6gY/WhHEmhW99E93ZkRXiqeVlH3v8ASw9KKNksZZUq4+hXi0XTJ5RiJY+boO2fSj2j8O2Hioksa7kb46DNIttqskcxju15fPySL3U9B9OmD9KcLLWpI7VcAyMvlLAfkaC2LltFVtR7HTXeF9NtrZZIYlwfLhhmsL12JLTiqNIlAVZ4yP8AcK0LUeM53gCMrkL0zWZarctc63Hct1Myf/IUymLUm+kLtknBLOzfYbkR2EbN05RSp/HZpNeSJFzGSRmmFizaKpJx/L64pK0CyZ2e5DHa4I3rQjMzRctgV1Rjn5V+VdVFldcOdjivbnzAVHFU2MnNFEqQq/aGCdClI7KayNVL3KIPxHFbZxdCkukypJ0Kms0TRLRZElaRwQcjJokm3gpvisjxw/ptyunoqHG2OlfNO0SeTX2WdyFAyMdTU2h8R2lnbrE8gJXbrX3+NNNqqz2yuVAwcUqytrIyuSegvp2mrpmuM3iMVkA2Y9KZbx4ngdQQTj1pPu7maSUXGGVu1SaXNKXkeeUsTuATVZcEkFGCnJ4ZQ0fRZb29vZPEKxh8ACg+rxx2GpG3lbowx6mm/QbxLaS6DsE5myKAavp0N/rUt4zZUYGR2pUoWKXJ9Dq3H8V2hh0XhiGWFZ51VyVBAxtQqfRYLbXJ44xhSobHp1p70Tw7fSokD8ypGBzGkniLVUOuy/DtnkQKSD1O9Ipg5S2xll3HbRSvLRrIrNbQJcTM/JHE58rMQcZ/Ki/DlndraO17BFC7JhliQKob2AoTw9qfxGtSJdYxHC0kaf6gQM/kTRie8mkdGGoG3UnPIkYbbHQ7GmX1xqsUO9ZCom7ouSWNsHDh7Uzqs7JqEsUBULCiHaM56kdD360blt3togLmbxGxgnGM/SqR1dLa7WO3u453k/8ALJw+fUD0r200t2paTI36Urn6HfHvJkPG9nINcvJbfmCucEKOu1GuAdXDuqTEMQvK/wDqXs39vrTNqCaRyyz30lvG0J5maRwCNjj+x/Ks+sZUj1X4+0Xw43ckLjHk3OMfrToSytrozWwS6HXVZLDLBlUbnYik3iZbWJIZrcKGDAjA9xTDrSKV54xs45gaVdR/mQkSH7gzXRlKCS4rRzVGTk+TNY4V1mLWdOW3JxIqAMKnGijToT4TnleXmOT0rJeCuInttbgQZVPusfbNbfqDLLYo4bYkGlSX6DX8lgpsN+1dQbiLXrbR44PFcBn7Z3r5VqDayU5xWmX4hhQasqBiq0X3asx9KGITA/FZRNKkZgSAD+1ZPqsqTcsnmUAZG9axxb/4RNnpyn9qSOErCz1hyblQyrtynpTIxzsCUtYAHCt9ZWs7m8UnfbO9Mq8RWnxPNZgEL1wKr8c6Hb2MAksYAAD5uT0pd4aubaEyrKuWzscUx1pxBrsakPup68Ws0ZI8ZoTa8QlLlRKCFJofc3yyW5A2XOwodG6u3n+lVNEi2hi4r10xQJ8GSpfYkdqu8ASrrVvLBO+ZF677n3pHu7gSs0UhyO1X/s4vJLHii3U55ZsoR9Miii8rDKk+LzEZte1q/wCFNRXT5vEktps+Gc9PaqDahHJJ47EDIxim/wC1LR0v9HS6QZkg84PtWTgSBQAp2G2aOvx62+TEX+TZjihu4XvII9Ta+nYLEGEeT0Xm71okUU1qpS1lZI2kLsoPUnr9Kx/R3IE1tIPLKM9O47UbbiPVNM8GxhuLW5h35eaTMsaDrnG2w3wcGub56fz5R1/pv/Dr/TQryOCL+ZKRzgbM5yR8vSlrU9ftrbKRsGfoFXck0uXbXl7dMtzdsd8DG1WrHRVW4WTZsb9KwOeXk38WtCbxwCb23kuU875ZgOp9quaMqzRc8qgBZMbDqD5Tt8/3qt9oQP8AEUmP3Yhycvueo/KvvDt2rQzwTnB8PIcemVw/6Z+lao7rRjk8WNDBYl5NOktpd5bNuUHrzIT1/wC/WlrX4ygwDgttTHagxTpdPssiGGVfQgZH6ZHvSrxVOIL8wkk8vT5djWyiScXGRj8iMlJOJV0aOG3nYynDHvW2WEj3PDEMhPYYI71gPxHNIc961n7PdeS44XNpcOBNA/L16jtRS0tFV8cPl36Kv2pSItzZADmfk/SvlCftKu2m1qEBgVWHb866tFbxFGOxZk2a/ERip4+9VkwOlTqQDtWSJsYN4pTn0i4H+kj9Kznga5jtLjkLDLVpPEDD+HSk/dxvWRaRcQR3UjJgKGOAelNj+gJLI96/qUEkBikCb0tR2NpHCZEC5NBNZvJZZGMCll7clD9Iu7y6v0tcnLHGDT4WKC2EksY9hm8j8yAbDNWYLaNQM96L3XC2oyzW0NpGZ5Xxsg6e5PYU98O/Z7bWwSbWmW6mAz4EZIjX5nYt+g+dI5p7BcJJ4Mqs+D9Y4j1QHSIMQKcSXMuViX6/iPsM/StY4a+zbR9IVZrzmvr8DadsosZ/0KDt8zk05xxpFGscSKiKMBVGABXqgcmEoi3xLo13eae1raFGUqRlyfKPkAc/Sklvsz1NU5mvNPG3XL//AFrVJ7hYRu2W7KBmqDvLdTZOAgOdun/fvV/K0gXUmzKoeHbOG/WFbqWWOFmE9wFCIzDqsQ6sR0LeoOBkHEt/c6YbVLOHToIxBubmNAZFHYKTvzNnBz2O+aedY4V0l4575IfhrjwyPEjGR/sJxnPy3rI7VLxNWtrCSJTPNcBTGXB22LH32NZL+UpHX8KVcYP9IeLHg9p9OjniuJJ5sczgxkBWx0BA+lebNCjvDLlXj2KkYxTcZURI1J2GygdFqjq0ULq9xJ5WiUvz9yAMkH22pEqU1lALyW5fcZBxnAszshGQ0niH12IH96XtGtrywle/8JnsreUwyP2APX6dKZeJ54prjYZABC5P3z61PoF9b29j8BLatLDeO6zTRgkxgKuG5fTffFNrWIYYq3c8omV/DgCuGksnA5Z4hzcncZA3G9U+JNAXWhFPZlVukXDp2l3zse3fHY5Ioe/xOmTm3glKwc5EMpA8Nxnpv0Hp/bsd0vUgkDrco0BH3sDKrnuM9Bt03FGsx2A/uWDPdVsntZkJjZANiGGCDU2gXE1hq0ILEJKQGx0NPerQWOrQGO8Yco3imQYIPpkbfTp8q8fwO1iihdQGePBU+tPjJSWjPKLiwbxxCJLiCeEc2VxtvXyr+uX9rYxQmdVJaurQpNaFcE/ZqSkmpCeUA1HCcgN2xVk8nL5qzxGMGayTNps64/Cf2r8/C+kgvJY8eUSN+9fou8ZJLd4lGcjFYnrnCVzBq7RW5yJXJGR0zRoHOBr4as7e60rxeQE8u9W+Gfs11HUNa/iV0zafYofKcDxZf/SOw9z+VOX2a6BZafosPiEz3qD+Ysq7IfYd/maeN6uU9YL25ciGytILKBYbdMKAAWO5b5mpz03rs1FPcRwLlyMnoKWES9Bk9KpXF71WDr/V6VXluJbk4Gy+groofEyPwdz/AFVCzxDG0zFsnk7n+qiEUQQAAdB0r7GgUAAdO1AOLNZ+GhNjZycs8gxI6neNT2HoT+lC9IOuuVkuMRK+1K+Ov2raZZNL8LazgyuBlZiMhv8AbnbsSD7GqPDkp/4W/iFssQnhXEBeIkh2YoE2IOexOdh2oXxPriaPbLBa4+JkGI0H4BjrRn7OdEjv9M+Nv3maVZcwr4zqmwHmKqQC2c79dqWpZ7Oh5HjRqrxB/rI7RQSfDxhnR5MbZyoNVtYRxpV3HMeV5YXjHJ0ywIqKbS723V3tNTuxKjE4Z+dWB7crbY617tNUFx/yupxokx22zyPj0HbrUMH+mO3NqYYEdh5ndo5GJyc8xGPy/tRGMx2cJncTNCZMMY05uUnGckdtqn4h0q+TU9TtbOJmijJuE59sgDm8vqSO3t7VS4eu+Upcs3NDjwLmPqOXJIOPfm/al9djW16HHT+HtP1a18e0vYbu1b74jGCD6EHcH570P1rQpNJi+JhDSwR5OM4ZR6Z/t/8AlWP+E2nc3emXU1lexNytJbyFOcDdc465BrzPpGvlJBNrl8wZehYEfliiyLFT4xGcGJkVicJk8qSe3+k/PbPpmrulzPKJYmyngb8uMED5UnzSS2V7JHKduYq4xttt0/tU8epzWfjpExZZIyiknpnBx8vSjr1JMqazFoi1b4rXdRkW2UukO21dT1wfp0FhpakoHklHMzHrmurXxyZeeDRrMB1C57VOIgQcnNC9JuOd8A9RRdMhDkd6TENlSdPDRioztSJrjXbapBPAuyNvWhPgg0vXIjW5ZTTYgSJ9L1SdGSePySDsO9PWl6nDqEBcHkdfvqe3vSIiry7VJb3DWlwksb8uOuKGS9lw7wOt1qIGUtxzHux6fSqShpH5nbmJq1pl9FfJyMFWZRkr2Yeo9v2q6UUHoM/Kg7G9MrwwbDI2NWVXlX2rubFCeKuI7LhjSJL+8PM33YYl+9K56Af57Cp0RJt4RJr+rrpcQij5Wu5QfDXqFH9R9h+p2rKOJtej0+N5ZnLytnlBO7t6/L3rzqXEEtpYPqurP4mo32WWHPQdkHoqg/v3NZlf3c2p3jPcOWYnLegHoPas8pcmdmmteND+zLNu0+q6ibq5bLyN1PQD0FbvwbEsGkwW/KY5UjDFT+IHcMPzrG9GtC64Qed/IufetqhPxFlb3VoBHNy8yA/hYdVPt2qov2V50fjrjD29sK83MSrLhuhPrQjVLJTNbSIfuORn1zuf2olHdRTWqXSAgMuSO4Pp880oapZSa/cSyXhISJitvHGxXk9Tt3yOtG3hHKW2Ftd02TUEj8AhJlRvMV+/0IGe3r0rMdB0vmv7/TZf5dwgMir05lGM4+X7Gme0uNW4XuEdp5rzTg382KVud4x/Up67enp9KO8YaElwYdd0mRUvIMSBlGzj1x32/MVNSRecPZJwxcGa0tpDuzReFICOjx7ft+1C9Mh1ocSXfxfjG3ZnJLMTGy58vL2BAwMDHfNXdFiAtLe/thiJ5f58QP8A05On5YbH+00YeUJKBnyttVp4QMllmI8cW0UOuahApHOs3PjHTmGf1BofaW000VvJyZjjJaQn0GBT39oWnoZyyqviSug2GCdsf2FD+ChDqNvcWdyg8eKPdSNnQjY0CbyH6COjLNFaLztsRtj0rquWMDR24jY83hsVz32Nfa3JaMbayF9ElxIpztimaSYLDnPass0vWFgxmTJ+dM8evRy25w2/zpMRsgxNqKxg8zYzS5cXDSXhZelVJrma7kJyQuat2kHQk05aFNl+GVioBqflDgknYV9giHKM71OUHKdqC1vg8DaFF2Ll0QxX0trKk0BzytnANPGkalDqdussR8+PMncUgzIOQleua8Wl3c2V0s9o5Dj7y/hcehrm13cHs7nkeJGyOY6ZpzkLu2wG5J7CsK4q1WPXdem1+8dv4RaHwLGPP/XIJ3Ue53z6AVoXFHEtlLw3J40j26OmLkA4cL3VfdumfTNYXrerSapcByiQwxjkgt0+5EvoK0WTTWhHh0uuXOaK+s6lcaneNcTnfGFUdEXsB7VFYwHPTJJ3ryEwmT+KiNjHjzHpSm/R0aaeVnOQxcPyx2V7aTvGZERwWVRkgeuPbrWp6fNb8rfDurRO3iDB9RWFa3cSw/DfDMyS8/MrISDsPUfOi+g8ZXNqFS8Dg9Oft9aPGEc/6hPlc1+jW7qUWNlPyEAO5K+zH0Hz3qtaJ4cSDqcUA0vVpNZlRSv8lG5ub+o+3tTJyM0fKjBW7HFRvJhSw8la8hEiEMBvtvRnRn5NItojGzcqcgJxjAyB+lBnaZfJMUIHcAgn9aNQlksY44VZSE3cj9qZUgLGKUc3wGrS2KErFcFsIOg8NgR+jY+gorcNkBsnYZoTcwFuIlkC4S3gZFHUczEFt+56ZPv7UEe31mfjj4jnlXToVBA5jysOUjGOmcmqe2RlvjCQSXNrMPupy5z26jP54oJoMlrpOv8AjXBZUEJiZ8eVQzDBb5Yx9aYdTiNxPKCMjAUCgdpILK/uEuIWkjwFbbm8p9u4oU8MPuIxIAFHKebPmz65rqrW1lHYo0MDMIeYlULZCew9vauroLo577FyPSB15aL2mnCNdhirccYxjFWokxS9IZs829sB12q5FbKem1fIxVkHstTJMHuOPHlDVN4fbmrwMAe9ew2NyamS1oqz+RmU7YqnNPDaQyXN04jiQZLGr12pKBu/Ss94y1Vby7FjEwaG3bLEfifG/wCXT865c68TaPS+JP5akwXxLxJJrEvhohjtEbmRT94nGMn/ABQeBFlcenU/KpjEuas2cah+XHlOzfKmKJpjTJvbK3IC3tVqJsAL9KguIWt53jP4TX2JulSKw8M0RwgvqVoj6ZosvKA80k5J9gwXH/tqF7EW9yA33W3H96sRXAudM0b0gacH5GU/5orrsHhaY9wqczRoWA9dqZJbR5eyfOcpfyw9w4iJyYFNGcEUj8J3omgiYuC2MHHQ+49qdicxKw9M/OhFkUq+JKqjqxxR0qRHgnfGx9KEWBWW7jztynO9HJioTY0+paE2dirfciX7RxjComPnnf8Av+tQPLkBR9a83Uoe9uGB2zioInDnY7+lA+2H6I57qyguX+IuI0cADkLbjbvXi3ewuJnmt54ZnA3EbgmqF/DeTX9zKbmYwh8KiRq2MAD09Qa9zxfE6a0Z8rggxzuiq6tnboKFLLLb+0uSt5yG6g711VWY9zk+tdXRwZGWId4w3erEZzXV1JDLC7VMnl6V1dVEPa19G7HNdXVZCO6BkiePmK5UjmXqNuorI5fI0gXI39dzvXV1KsSO39Jbw0QKMtRe1jUaeHx5izb11dSo9Ha6RW1MAxQuR5sFc+wx/mqB8oYjsCR+VdXVT/ICX4svcJ/z9PlWQkhMhR6d/wC9Ok6ibRo/EGeeMZ/Kurqkuzy8QTw+BbXAhh2jR+UD2p2u3ltowYpWAIGxwR+1dXVCBTTRm5YnqF/xRCRiYQfaurq0Q/ERPsS+Y/zHPXxDWd8OXlzLxzHzzyETSyq45tiAGwP0FdXUtdsY+kNaWwW9keOWaNnkLHw5CuST7UUs3KlsqrkqwLMN/wDFdXUMfyI+iqzEmvldXVtMp//Z" alt="Women's Fashion" />
                <div className="category-overlay">
                  <h3>Women's Fashion</h3>
                  <p>Elegant & Trendy</p>
                  <span className="shop-link">Shop Now →</span>
                </div>
              </div>
            </div>
            
            <div className="category-card" onClick={() => handleShopNow('children')}>
              <div className="category-image">
                <img src="data:image/jpeg;base64,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" alt="Kids Fashion" />
                <div className="category-overlay">
                  <h3>Kids Fashion</h3>
                  <p>Playful & Stylish</p>
                  <span className="shop-link">Shop Now →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.27 6.96L12 12.01L20.73 6.96M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Free Shipping</h3>
              <p>Free delivery on orders over $50. Fast and reliable shipping worldwide.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Easy Returns</h3>
              <p>30-day hassle-free returns. Not satisfied? Return it for free.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Quality Guarantee</h3>
              <p>Premium quality materials and craftsmanship in every product.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Secure Payment</h3>
              <p>Your payment information is safe and secure with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Shopping?</h2>
            <p>Discover thousands of products at unbeatable prices</p>
            <button className="cta-button large" onClick={() => handleShopNow()}>
              Browse All Products
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;