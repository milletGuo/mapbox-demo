let mapControl = null;
export const Store = {
    mapControl(_) {
        if (!_) return mapControl;
        mapControl = _;
    }
}