import { useEffect, useState } from 'react';
import './CategoriesMegaMenu.scss'

const CategoriesMegaMenu = () => {
  const categories = [
    {
      name: "Top Deals",
      children: [
        {
          name: "Sub Category 1",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 2",
          items: [
            { name: "Item 11", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 23", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 33", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 44", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 55", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 3",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 4",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 5",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 6",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        }
      ]
    },
    {
      name: "Groceries & Essentials",
      children: [
        {
          name: "Sub Category 11",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 22",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 33",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 4",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 5",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 6",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        }
      ]
    },
    {
      name: "Electronics",
      children: [
        {
          name: "Sub Category 1",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 2",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 3",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 4",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 5",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 6",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        }
      ]
    },
    {
      name: "Men’s Fashion",
      children: [
        {
          name: "Sub Category 1",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 2",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 3",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 4",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 5",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 6",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        }
      ]
    },
    {
      name: "TWomen’s Fashion",
      children: [
        {
          name: "Sub Category 1",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 2",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 3",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 4",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 5",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        },
        {
          name: "Sub Category 6",
          items: [
            { name: "Item 1", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 2", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 3", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 4", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
            { name: "Item 5", subItems: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] }
          ]
        }
      ]
    },
  ];
  useEffect(() => {
    console.log(categories[0].children[0].items[0].name);
  }, [])
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedSubCategoryIndex, setSelectedSubCategoryIndex] = useState(0);

  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex(index);
    setSelectedSubCategoryIndex(null); // Reset subcategory selection when main category changes
  };

  const handleSubCategoryClick = (subIndex) => {
    setSelectedSubCategoryIndex(subIndex);
  };

  //   console.log("Selected Category Index:", selectedCategoryIndex);
  //   console.log("Selected Subcategory Index:", selectedSubCategoryIndex);

  return (
    <div className='MegaMenuMainWrapper'>
      <div className="overLay">
        <div className="mega-menu">
          <div className="main-categories-list">
            {categories.map((data, index) => (
              <div
                key={index}
                className={`items-wrapp ${selectedCategoryIndex === index ? 'active-category' : ''}`}
                onClick={() => handleCategoryClick(index)}
              >
                <p className='items'>{data.name}</p>
              </div>
            ))}
          </div>
          <div className="sub-categories-list">
            {selectedCategoryIndex !== null &&
              categories[selectedCategoryIndex].children.map((subCategory, subIndex) => (
                <div
                  key={subIndex}
                  className={`items-wrapp ${selectedSubCategoryIndex === subIndex ? 'active-subcategory' : ''}`}
                  onClick={() => handleSubCategoryClick(subIndex)}
                >
                  <p className="subcategory items">
                    {subCategory.name}
                  </p>
                </div>
              ))
            }
          </div>
          <div className="super-sub-categories-list">
            {/* console.log(categories[0].children[0].items[0].name); */}
            {selectedSubCategoryIndex !== null &&
              categories[selectedCategoryIndex].children[selectedSubCategoryIndex].items &&
              categories[selectedCategoryIndex].children[selectedSubCategoryIndex].items.map((item, itemIndex) => (
                <div key={itemIndex} className="items-wrapp">
                  <p className='super-sub-subcategory items'>{item.name}</p>
                </div>
              ))
            }
          </div>
          <div className="chiled-items-list">
            <table>
              <tr>
                <th>Snacks</th>
                <th>Snacks</th>
                <th>Snacks</th>
              </tr>
              <tr>
                <td>Oats</td>
                <td>Oats</td>
                <td>Oats</td>
              </tr>
              <tr>
                <td>Oats</td>
                <td>Oats</td>
                <td>Oats</td>
              </tr>
              <tr>
                <td>Oats</td>
                <td>Oats</td>
                <td>Oats</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>Snacks</th>
                <th>Snacks</th>
                <th>Snacks</th>
              </tr>
              <tr>
                <td>Oats</td>
                <td>Oats</td>
                <td>Oats</td>
              </tr>
              <tr>
                <td>Oats</td>
                <td>Oats</td>
                <td>Oats</td>
              </tr>
              <tr>
                <td>Oats</td>
                <td>Oats</td>
                <td>Oats</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>Snacks</th>
                <th>Snacks</th>
                <th>Snacks</th>
              </tr>
              <tr>
                <td>Oats</td>
                <td>Oats</td>
                <td>Oats</td>
              </tr>
              <tr>
                <td>Oats</td>
                <td>Oats</td>
                <td>Oats</td>
              </tr>
              <tr>
                <td>Oats</td>
                <td>Oats</td>
                <td>Oats</td>
              </tr>
            </table>
          </div>
          <div className="item-image">
            <img src="/Images/menubar-image.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesMegaMenu
