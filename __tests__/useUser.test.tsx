import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from "vitest";
import { act, renderHook } from '@testing-library/react'
import useUser from '../hooks/useUser'

describe('useUser', () => {
    it('should exist', () => {
        const { result } = renderHook(() => useUser())
        expect(result).toBeDefined()
    })


    it('should have userData', () => {
        const dummyUser = {
            name: "philip", email: 'philip.eiler@hotmail.com'
        }
        const { result } = renderHook(() => useUser(dummyUser))
        expect(result.current.user).toMatchObject(dummyUser);
        expect(result.current.user).not.toMatchObject({ ...dummyUser, id: 1 })
    }
    )
})