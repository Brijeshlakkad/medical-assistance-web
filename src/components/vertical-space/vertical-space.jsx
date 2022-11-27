import styled from "styled-components"

export function VerticalSpace({ height }) {
    const Container = styled.div`
        height: ${typeof height === 'number' ? height : 4}rem;
    `
    return <Container />
}