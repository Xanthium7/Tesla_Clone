import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <section id='ms' className="model-s">
        <Section
            title="Model S"
            description="Order Online For Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftbtnText="Custom order"
            rightBtnText="Exisiting Inventory"
        />
        </section>
        <section id='my' className="model-y">
        <Section
        title="Model Y"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftbtnText="Custom order"
        rightBtnText="Exisiting Inventory"
        />
        </section>
        <section id='m3' className="model-3">
        <Section
        title="Model 3"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftbtnText="Custom order"
        rightBtnText="Exisiting Inventory"
        />
        </section>
        <section id='mx' className="model-x">
        <Section
        title="Model X"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftbtnText="Custom order"
        rightBtnText="Exisiting Inventory"
        />
        </section>
        <section id='p' className="panel">
        <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back Gurantee"
        backgroundImg="solar-panel.jpg"
        leftbtnText="Order Now"
        rightBtnText="Learn More"
        />
        </section>
        <section id='r' className="roof">
        <Section
        title="Solar for New Roofs"
        description="Solar Roofs Costs Less Than a New Roof"
        backgroundImg="solar-roof.jpg"
        leftbtnText="Order Now"
        rightBtnText="Learn More"
        />
        </section>
        <section id='a' className="access">
        <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftbtnText="Shop Now"
        
        />
        </section>

    </Container>
  )
}

export default Home


const Container = styled.div`
    height: 100vh;

`




