const CustomUseEffect = (effect, deps) => {

    // Tracks first mount
    const firstRender = useRef(true)

    // Stores previous deps array
    const prevDeps = useRef([])

    // Stores cleanup function between renders
    const cleanupRef = useRef(null)

    // -------------------
    // MOUNT
    // -------------------

    if (firstRender.current) {

        // Run effect on mount
        const cleanup = effect()

        // Save cleanup for future (update/unmount)
        cleanupRef.current = cleanup

        firstRender.current = false

        // Nothing cleaned now (same as React)
        return
    }

    // -------------------
    // UPDATE
    // -------------------

    let depsChanged = deps
        ? !deps.every((dep, i) => Object.is(dep, prevDeps.current[i]))
        : true

    if (depsChanged) {

        // 👉 cleanup previous effect BEFORE running new one
        if (cleanupRef.current) {
            cleanupRef.current()
        }

        // 👉 run new effect
        const cleanup = effect()

        // 👉 store its cleanup
        cleanupRef.current = cleanup
    }

    // Save deps for next render
    prevDeps.current = deps || []

    // -------------------
    // UNMOUNT (simulation idea)
    // -------------------
    // In real React this runs when component is destroyed
    return () => {
        if (cleanupRef.current) {
            cleanupRef.current()
        }
    }
}

export default CustomUseEffect
