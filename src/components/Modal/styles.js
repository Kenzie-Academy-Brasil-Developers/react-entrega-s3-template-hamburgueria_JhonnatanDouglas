import styled from 'styled-components'

export const DivDialog = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-0);
  background-color: rgba(0, 0, 0, 0.3);

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    width: 100%;
    max-width: 31.25rem;
    margin: 0.625rem;
    border-radius: var(--border-radius-0);
    background-color: var(--color-white);
  }

  > div > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-primary);
    border-radius: 0.3125rem 0.3125rem 0rem 0rem;
    padding: 0.625rem 1.25rem;
    height: 3.375rem;
    width: 100%;
  }

  > div > div:nth-child(1) > h4 {
    font-weight: var(--font-weight-4);
    font-size: var(--font-size-4);
    color: var(--color-white);
  }

  > div > div:nth-child(1) > button {
    position: absolute;
    top: 0.9375rem;
    right: 1.25rem;
    background-color: transparent;
    font-size: var(--font-size-4);
    color: rgba(255, 255, 255, 0.8);
  }

  > div > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 1.25rem;
  }

  > div > div:nth-child(2) > ul {
    display: flex;
    flex-direction: column;
    padding-right: 0.3125rem;
    max-height: 17.8125rem;
    padding: 0.9375rem 0.625rem 0.9375rem 0rem;
    width: 100%;
    overflow-y: auto;
    border-bottom: 0.125rem solid var(--color-grey-200);
    gap: 0.625rem;
  }

  > div > div:nth-child(2) > ul::-webkit-scrollbar {
    width: 0.3125rem;
  }
  > div > div:nth-child(2) > ul::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
  }

  > div > div:nth-child(2) > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0.9375rem 0rem;
  }

  > div > div:nth-child(2) > div > h4:first-child {
    font-weight: var(--font-weight-3);
    font-size: var(--font-size-2);
    color: var(--color-grey-600);
  }
  > div > div:nth-child(2) > div > h4:last-child {
    font-weight: var(--font-weight-3);
    font-size: var(--font-size-2);
    line-height: 1.5rem;
    color: var(--color-grey-500);
  }
`
