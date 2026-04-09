package com.dylanvann.fastimage;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;

public class FastImageViewEvent extends Event<FastImageViewEvent> {
    private final String eventName;
    private final WritableMap payload;

    public FastImageViewEvent(int surfaceId, int viewId, String eventName) {
        this(surfaceId, viewId, eventName, null);
    }

    public FastImageViewEvent(int surfaceId, int viewId, String eventName, @Nullable WritableMap payload) {
        super(surfaceId, viewId);
        this.eventName = eventName;
        this.payload = payload;
    }

    @Override
    public String getEventName() {
        return eventName;
    }

    @Override
    protected WritableMap getEventData() {
        return payload != null ? payload : Arguments.createMap();
    }
}
